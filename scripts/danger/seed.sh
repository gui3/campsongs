#!/usr/bin/env sh

# this script
# seeds the database (inject fake data)
# TO BE USED IN DEVELOPMENT ONLY

cd $(dirname "$0") # goto this file directory

source ../util/only_development.sh

# database setup
../test_db_connection.sh


echo ">> seed - mode $NODE_ENV"
cd ../../server
npm run knex seed:run -- --env "$NODE_ENV"
