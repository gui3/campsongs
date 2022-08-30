#!/usr/bin/env sh
cd $(dirname "$0") # goto <root>/scripts

echo ">> testing database connection"
NODE_ENV=development node ../scripts/node/test_db_connection.js
