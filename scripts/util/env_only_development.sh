#!/usr/bin/env sh

if [[ $NODE_ENV != development ]]
then
    echo "NOT IN DEV MODE - stop"
    exit
fi