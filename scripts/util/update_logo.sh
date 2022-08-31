#!/usr/bin/env sh

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(dirname $(readlink -f "$0")))
cd $DIR_SCRIPTS

echo ">> updating logo"
node ./node/update_logo.mjs
