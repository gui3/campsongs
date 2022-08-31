#!/usr/bin/env sh

# goto script directory
FILE_DIR=$(dirname $(readlink -f "$0"))
cd $FILE_DIR
cd ..

echo ">> updating logo"
node ./node/update_logo.mjs
