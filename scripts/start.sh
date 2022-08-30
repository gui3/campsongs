#!/usr/bin/env bash
cd $(dirname "$0") # goto this file directory

cd ../client && npm run vite build -- --mode development
cd ../server && node ./src/main.js
