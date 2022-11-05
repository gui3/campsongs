#!/usr/bin/env sh

# this script
# seeds the database (inject fake data)
# TO BE USED IN DEVELOPMENT ONLY

# goto script directory
#[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(dirname $(readlink -f "$0")))
#cd $DIR_SCRIPTS

source ${SONGDIR}scripts/util/env_only_development.sh

# database setup
source ${SONGDIR}scripts/util/test_db_connection.sh


echo ">> seed - mode $NODE_ENV"
cd ${SONGDIR}server
npm run knex seed:run -- --env "$NODE_ENV"
