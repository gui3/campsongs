#!/usr/bin/env sh

# this script
# stops and delete the docker container

cd $(dirname "$0") # goto this file directory

cd ../..
docker stop songbook_dev
docker rm songbook_dev