#!/usr/bin/env sh
cd $(dirname "$0") # goto <root>/scripts

echo ">> updating logo"
node ./node/update_logo.mjs
