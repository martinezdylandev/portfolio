#!/bin/bash

# Portfolio Production Deployment Script
# Run on the droplet: pull-only from GitHub, no local edits except .env.prod

set -Eeuo pipefail

PROJECT_NAME="portfolio"

# Resolve script location and project root (script can be run from any cwd)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
COMPOSE_FILE="${PROJECT_ROOT}/docker-compose.prod.yml"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🚀 Starting ${PROJECT_NAME} production deployment...${NC}"
echo ""

check_prerequisites() {
    echo -e "${BLUE}🔍 Checking deployment prerequisites...${NC}"

    # Commands required on the server
    if ! command -v git >/dev/null 2>&1; then
        echo -e "${RED}❌ Error: git is not installed${NC}"
        exit 1
    fi
    if ! command -v docker >/dev/null 2>&1; then
        echo -e "${RED}❌ Error: docker is not installed${NC}"
        exit 1
    fi
    if ! docker compose version >/dev/null 2>&1; then
        echo -e "${RED}❌ Error: docker compose (V2) is not available${NC}"
        exit 1
    fi

    cd "${PROJECT_ROOT}"

    # Pull-only deploy: must be a git repo with origin
    if ! git rev-parse --is-inside-work-tree &>/dev/null; then
        echo -e "${RED}❌ Error: not inside a git repository${NC}"
        exit 1
    fi
    if ! git remote get-url origin &>/dev/null; then
        echo -e "${RED}❌ Error: no 'origin' remote configured${NC}"
        exit 1
    fi

    if [ ! -f "${COMPOSE_FILE}" ]; then
        echo -e "${RED}❌ Error: docker-compose.prod.yml not found at ${COMPOSE_FILE}${NC}"
        exit 1
    fi
    if [ ! -f "${PROJECT_ROOT}/package.json" ]; then
        echo -e "${RED}❌ Error: package.json not found in project root${NC}"
        exit 1
    fi
    if [ ! -f "${PROJECT_ROOT}/docker/client/Dockerfile" ] || [ ! -f "${PROJECT_ROOT}/docker/server/Dockerfile" ]; then
        echo -e "${RED}❌ Error: Dockerfiles not found${NC}"
        exit 1
    fi

    echo -e "${GREEN}✅ All prerequisites checked${NC}"
}

deploy_production() {
    cd "${PROJECT_ROOT}"

    echo -e "${BLUE}📦 Updating repository (fetch + reset to origin/main)...${NC}"
    git fetch origin
    git reset --hard origin/main

    echo -e "${BLUE}🐳 Stopping existing containers...${NC}"
    docker compose -f "${COMPOSE_FILE}" down

    echo -e "${BLUE}🏗️  Building production images...${NC}"
    docker compose -f "${COMPOSE_FILE}" build --no-cache

    echo -e "${BLUE}🚀 Starting production containers...${NC}"
    docker compose -f "${COMPOSE_FILE}" up -d

    echo -e "${BLUE}🧹 Cleaning up unused Docker images...${NC}"
    docker image prune -f

    echo -e "${GREEN}✅ Containers started${NC}"
}

show_deployment_summary() {
    echo ""
    echo "🎉 ${PROJECT_NAME} production deployment complete!"
    echo ""
    echo "📝 Container status:"
    docker compose -f "${COMPOSE_FILE}" ps
    echo ""
}

main() {
    check_prerequisites
    echo ""
    deploy_production
    echo ""
    show_deployment_summary
}

main "$@"
