#!/bin/bash

# Portfolio Database Migration Runner
# Applies any pending migrations from /migrations/*.sql in sorted order.
# Tracks applied migrations in the schema_migrations table so each file
# is only ever applied once, making it safe to run on every deploy.

set -Eeuo pipefail

echo "Starting database migration runner..."

# Create the migration tracking table if it doesn't exist yet.
# This is idempotent and works on both fresh and existing databases.
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
   CREATE TABLE IF NOT EXISTS schema_migrations (
      filename   VARCHAR(255) PRIMARY KEY,
      applied_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
   );
EOSQL

echo "Migration tracking table ready."

# Apply each migration file in lexicographic (numeric) order.
APPLIED=0
SKIPPED=0

for migration in $(ls /migrations/*.sql 2>/dev/null | sort); do
   filename=$(basename "$migration")

   already_applied=$(psql -t --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
      -c "SELECT EXISTS (SELECT 1 FROM schema_migrations WHERE filename = '$filename');" \
      | tr -d '[:space:]')

   if [ "$already_applied" = "t" ]; then
      echo "  ⏭️  Already applied: $filename"
      SKIPPED=$((SKIPPED + 1))
   else
      echo "  ⬆️  Applying: $filename"
      psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -f "$migration"
      psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" \
         -c "INSERT INTO schema_migrations (filename) VALUES ('$filename');"
      echo "  ✅ Applied: $filename"
      APPLIED=$((APPLIED + 1))
   fi
done

echo ""
echo "Migration runner complete — applied: ${APPLIED}, skipped: ${SKIPPED}."
