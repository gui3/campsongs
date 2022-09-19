#!/usr/bin/env sh

# this script
# builds the client static files

# goto script directory
#[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(readlink -f "$0"))
#cd $DIR_SCRIPTS

source ${SONGDIR}scripts/util/env_check.sh

echo ">> building client app - mode $NODE_ENV"
cd ${SONGDIR}client
npm run vite build -- --mode "$NODE_ENV"
