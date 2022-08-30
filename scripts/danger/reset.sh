#!/usr/bin/env sh

# this script
# execute clean.sh then setup.sh
# ALL DATA WILL BE LOST
# TO BE USED IN DEVELOPMENT ONLY

cd $(dirname "$0") # goto this file directory

NODE_ENV=development

./dangerous_clean.sh
./setup.sh