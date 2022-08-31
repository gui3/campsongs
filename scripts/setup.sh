#!/usr/bin/env sh

# this script
# prepares the environment for the app
# (install dependancies, verify & migrate database...)

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(readlink -f "$0"))
cd $DIR_SCRIPTS

source ./util/env_check.sh

# npm installs
echo ">> dependencies"
echo ">> install client"
cd ../client
npm install
echo ">> install server"
cd ../server
npm install

# database setup
echo ">> database setup"
source ../scripts/test_db_connection.sh

echo ">> migrate to latest - mode development"
NODE_ENV=$NODE_ENV npm run knex migrate:latest 
# -- --env development
