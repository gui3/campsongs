#!/usr/bin/env sh

# this script
# starts the server, serving ALREADY BUILT static files

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(readlink -f "$0"))
cd $DIR_SCRIPTS

source ./util/env_check.sh

echo ">> starting node server - mode $NODE_ENV"
cd ../server
NODE_ENV=$NODE_ENV node ./src/main.js
