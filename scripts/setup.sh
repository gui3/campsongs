#!/usr/bin/env sh

# this script
# prepares the environment for the app
# (install dependancies, verify & migrate database...)

# goto script directory
#[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(readlink -f "$0"))
#cd $DIR_SCRIPTS

source ${SONGDIR}scripts/util/env_check.sh

# npm installs
echo ">> dependencies"
echo ">> install client"
cd ${SONGDIR}client
npm install
echo ">> install server"
cd ${SONGDIR}server
npm install

cd ..

# database setup
echo ">> database setup"
. ${SONGDIR}scripts/util/test_db_connection.sh

echo ">> migrate to latest - mode $NODE_ENV"
cd ${SONGDIR}server
NODE_ENV=$NODE_ENV npm run knex migrate:latest 
# -- --env development
