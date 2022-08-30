#!/usr/bin/env sh

# this script
# starts the server, serving ALREADY BUILT static files

cd $(dirname "$0") # goto this file directory

source ./util/set_env.sh

echo ">> starting node server - mode $NODE_ENV"
cd ../server
node ./src/main.js
