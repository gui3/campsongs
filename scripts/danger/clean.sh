#!/usr/bin/env sh

# this script
# cleans the app environment
# ! it migrates the database DOWN
# ! so ANY DATA IN THE BASE WILL BE LOST

cd $(dirname "$0") # goto this file directory

NODE_ENV=development

# question 
echo "You are about to erase all data of the database" \
    "and uninstall all npm packages"

read -p "Are you sure ?? (type exactly YES to process) >>" answer
if [[ "$answer" != YES ]]
then
    echo "not cleaning."
    exit
fi

echo ">> cleaning"

# database setup
./test_db_connection.sh

echo ">> migrate to latest - mode development"
cd ../server
npm run knex migrate:down -- --env development

# npm UNINSTALL
echo ">> UNINSTALLING dependencies"
cd ../client
npm uninstall --no-save `ls -1 node_modules | tr '/\n' ' '`
cd ../server
npm uninstall --no-save `ls -1 node_modules | tr '/\n' ' '`
