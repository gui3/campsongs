#!/usr/bin/env sh

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(readlink -f "$0"))
cd $DIR_SCRIPTS

source ./util/env_check.sh

echo ">> starting client hot refresh - mode $NODE_ENV"
cd ../client
NODE_ENV=$NODE_ENV npm run vite
