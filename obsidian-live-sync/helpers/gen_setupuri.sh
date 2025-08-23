#!/bin/bash
set -euo pipefail
if [ -z "$1" ]; then
  echo "Usage: $0 <obsidian_username>"
  exit 1
fi
cd "$(dirname "$0")"
export $(cat .env | xargs)
export COUCHDB_NAME="obsidian_${1}" 
deno run -A generate_setupuri.ts
