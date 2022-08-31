#!/usr/bin/env sh

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(dirname $(readlink -f "$0")))
cd $DIR_SCRIPTS

source ./util/env_check.sh

echo ">> testing database connection"
NODE_ENV=development node ./node/test_db_connection.js
