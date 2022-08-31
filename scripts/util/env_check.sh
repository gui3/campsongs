#!/usr/bin/env sh

# if [[ -z ${NODE_ENV+x} ]] # if NODE_ENV is unset
if [ "$NODE_ENV" != "production" ]
then 
    [ "$NODE_ENV" != development ] && echo "!! production not specified, forcing mode to development"
    NODE_ENV=development
fi

echo ">> using mode $NODE_ENV"
