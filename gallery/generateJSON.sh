#!/bin/bash

output_file="./src/assets/data.json"

echo "[" > "$output_file"

first=true
for file in ./data-files/.data-*; do
  if [ -f "$file" ]; then
    if [ "$first" = true ]; then
      first=false
    else
      echo "," >> "$output_file"
    fi
    cat "$file" >> "$output_file"
  fi
done

echo "]" >> "$output_file"

npx prettier --write "$output_file"
