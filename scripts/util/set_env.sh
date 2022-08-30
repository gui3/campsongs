#!/usr/bin/env sh

if [[ -z ${NODE_ENV+x} ]] # if NODE_ENV is unset
# if [[ "$NODE_ENV" == "" ]]
then 
    echo "!! NODE_ENV not specified, using mode development"
    NODE_ENV=development
fi
