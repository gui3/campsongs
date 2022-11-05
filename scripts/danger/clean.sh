#!/usr/bin/env sh

# this script
# cleans the app environment
# ! it migrates the database DOWN
# ! so ANY DATA IN THE BASE WILL BE LOST

# goto script directory
#[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(dirname $(readlink -f "$0")))
#cd $DIR_SCRIPTS

source ${SONGDIR}scripts/util/env_only_development.sh

# question 
echo "You are about to erase all data of the database"
    # "and uninstall all npm packages"

read -p "Are you sure ?? (type exactly YES to process) >>" answer
if [[ "$answer" != YES ]]
then
    echo "not cleaning."
    exit
fi

echo ">> cleaning"

# database setup
source ${SONGDIR}scripts/util/test_db_connection.sh

echo ">> migrate to zero - mode $NODE_ENV"
cd ${SONGDIR}server
npm run knex migrate:down -- --env development


# npm UNINSTALL
# echo ">> UNINSTALLING dependencies"
# cd ../client
# npm uninstall --no-save `ls -1 node_modules | tr '/\n' ' '`
# cd ../server
# npm uninstall --no-save `ls -1 node_modules | tr '/\n' ' '`
