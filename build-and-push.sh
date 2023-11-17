#!/bin/bash

# Set your source and destination repository directories
PARENT_DIR=$(dirname "$(pwd)")
DESTINATION_FOLDER_NAME="atibcco.com"  # Replace with your desired folder name
DESTINATION_DIR="$PARENT_DIR/$DESTINATION_FOLDER_NAME"

# Step 1: Build the Next.js project in the source repository
pnpm install
pnpm run build


# Step 2: Check if .next folder exists or not
if [ -d "$DESTINATION_DIR/build" ]; then
  # delete if exists
  echo "build folder found in destination folder. Deleting..."
  rm -rf "$DESTINATION_DIR/build"
else
  echo "build folder not found in destination folder."
fi

# Step 2: Copy the build to the destination repository
cp -r "./build" "$DESTINATION_DIR/build"

# Step 3: Clean up (optional)
rm -rf "$DESTINATION_REPO_DIR/*"

# Provide some feedback
echo "Build has been successfully created and pushed to the destination repository on GitHub."
