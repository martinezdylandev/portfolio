#!/bin/bash

# Portfolio Database Initialization Script
# Runs once when the PostgreSQL data volume is first created (docker-entrypoint-initdb.d).
# For subsequent deploys, migrations are applied by deploy.sh via /scripts/migrate.sh.

set -Eeuo pipefail

echo "Starting database initialization..."

# Wait for PostgreSQL to be ready
until pg_isready -U "$POSTGRES_USER" -d "$POSTGRES_DB"; do
   echo "Waiting for PostgreSQL to be ready..."
   sleep 2
done

echo "PostgreSQL is ready."

# Apply all migrations via the shared runner (creates schema_migrations tracking
# table on the first call, then applies every *.sql file not yet recorded).
bash /scripts/migrate.sh

# Seed initial data if the projects table is empty
ROW_COUNT=$(psql -t --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
   -c "SELECT COUNT(*) FROM projects;" | tr -d '[:space:]')

if [ "$ROW_COUNT" = "0" ]; then
   echo "Projects table is empty. Running seed files..."
   psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
      -f /seeds/001_real_projects.sql
   echo "Seeding complete."
else
   echo "Projects table already has ${ROW_COUNT} row(s). Skipping seed."
fi

echo "Database initialization complete!"
