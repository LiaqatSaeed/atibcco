#!/bin/bash

# Set your source and destination repository directories
PARENT_DIR=$(dirname "$(pwd)")
DESTINATION_FOLDER_NAME="atibcco.com"  # Replace with your desired folder name
DESTINATION_DIR="$PARENT_DIR/$DESTINATION_FOLDER_NAME"

# Step 1: Build the Next.js project in the source repository
pnpm install
pnpm run build


# Step 2: Check if .next folder exists or not
if [ -d "$DESTINATION_DIR/.next" ]; then
  # delete if exists
  echo ".next folder found in destination folder. Deleting..."
  rm -rf "$DESTINATION_DIR/.next"
else
  echo ".next folder not found in destination folder."
fi

# Step 2: Copy the build to the destination repository
cp -r "./.next" "$DESTINATION_DIR"

# Step 3: Navigate to the destination repository
cd "$DESTINATION_REPO_DIR"

echo "folder active $(pwd)"

# Step 4: Add, commit, and push the changes
git add .
git commit -m "Update Next.js build"
git push origin liaqat/build

# Step 5: Clean up (optional)
rm -rf "$DESTINATION_REPO_DIR/.next"

# Provide some feedback
echo "Build has been successfully created and pushed to the destination repository on GitHub."
