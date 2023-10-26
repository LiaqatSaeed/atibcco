#!/bin/bash

# Set your source and destination repository directories
PARENT_DIR=$(dirname "$(pwd)")
SOURCE_REPO_FOLDER_NAME="atibcoo"
DESTINATION_FOLDER_NAME="atibcco.com"  # Replace with your desired folder name
SOURCE_REPO_DIR="$PARENT_DIR/$SOURCE_REPO_FOLDER_NAME"
DESTINATION_DIR="$PARENT_DIR/$DESTINATION_FOLDER_NAME"

# Step 1: Build the Next.js project in the source repository
cd "$SOURCE_REPO_DIR"
pnpm install
pnpm run build

echo "$(pwd)"

# Step 2: Copy the build to the destination repository
cp -r "$SOURCE_REPO_DIR/.next" "$DESTINATION_REPO_DIR"

# Step 3: Navigate to the destination repository
cd "$DESTINATION_REPO_DIR"

# Step 4: Add, commit, and push the changes
git add .
git commit -m "Update Next.js build"
git push origin liaqat/build

# Step 5: Clean up (optional)
rm -rf "$DESTINATION_REPO_DIR/.next"

# Provide some feedback
echo "Build has been successfully created and pushed to the destination repository on GitHub."
