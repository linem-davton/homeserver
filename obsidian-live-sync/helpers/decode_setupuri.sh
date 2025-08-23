#!/bin/bash
# Change dir to the script's directory
cd "$(dirname "$0")"
export $(cat .env | xargs)
deno run -A decrypt_setupuri.ts "$@"
