#!/bin/bash
set -e

FOLDER="react-scaffold"
ZIP_FILE="$1"

# Validate input
if [ -z "$ZIP_FILE" ]; then
  echo "Usage: $0 <result-zip-name>"
  exit 1
fi

# Append .zip if not provided
case "$ZIP_FILE" in
  *.zip) ;;
  *) ZIP_FILE="$ZIP_FILE.zip" ;;
esac

# Check folder exists
if [ ! -d "$FOLDER" ]; then
  echo "Error: Folder '$FOLDER' does not exist."
  exit 1
fi

# Fail if zip already exists
if [ -f "$ZIP_FILE" ]; then
  echo "Error: '$ZIP_FILE' already exists. Aborting."
  exit 1
fi

zip -r "$ZIP_FILE" "$FOLDER" \
  -x "*/node_modules/*" \
  -x "*/.git/*" \
  -x "*.env"

echo "Created $ZIP_FILE successfully."