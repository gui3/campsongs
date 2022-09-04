#!/usr/bin/env sh

# this script
# execute clean.sh then setup.sh
# ALL DATA WILL BE LOST
# TO BE USED IN DEVELOPMENT ONLY

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(dirname $(readlink -f "$0")))
cd $DIR_SCRIPTS

source ./util/env_only_development.sh

./danger/clean.sh
./setup.sh