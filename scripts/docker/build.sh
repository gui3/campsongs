#!/usr/bin/env sh

# this script
# runs the docker image in a new container

cd $(dirname "$0") # goto this file directory

cd ../..
docker build \
    --file Dockerfile.dev \
    --tag songbook:dev \
    .