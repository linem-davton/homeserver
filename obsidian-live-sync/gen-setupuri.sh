#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <obsidian_username>"
  exit 1
fi

export database="obsidian_${1}" 
deno run -A https://raw.githubusercontent.com/vrtmrz/obsidian-livesync/main/utils/flyio/generate_setupuri.ts
