#!/usr/bin/env sh

# this script
# starts the server in background
# allowing to hot rebuild by typing "b" or "build"

cd $(dirname "$0") # goto this file directory

source ./util/set_env.sh

echo "--- DEV HOT REFRESH MODE"
echo "--- server will start in background"
echo "--- enter stop (or s)to kill it"
echo "--- enter build (or b) to rebuild the client"
echo ""
echo ""
sleep 1

echo "--- starting server"
./start.sh &  # will run in the background
PROCESS_ID=$!

while read -p "" command
do
  case $command in
    "b") ./build.sh && echo "--- build updated" ;;
    "build") ./build.sh && echo "--- build updated" ;;
    "s") kill $PROCESS_ID && break ;;
    "stop") kill $PROCESS_ID && break ;;
    *) echo "--- enter one of (stop | s | build | b)" ;;
  esac
done

echo "--- server stopped"