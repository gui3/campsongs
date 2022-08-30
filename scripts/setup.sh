#!/usr/bin/env sh

# this script
# prepares the environment for the app
# (install dependancies, verify & migrate database...)

cd $(dirname "$0") # goto this file directory

source ./util/set_env.sh

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
../scripts/test_db_connection.sh

echo ">> migrate to latest - mode development"
npm run knex migrate:latest -- --env development
