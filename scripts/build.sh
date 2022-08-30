#!/usr/bin/env sh

# this script
# builds the client static files

cd $(dirname "$0") # goto this file directory

source ./util/set_env.sh

echo ">> building client app - mode $NODE_ENV"
cd ../client
npm run vite build -- --mode "$NODE_ENV"
