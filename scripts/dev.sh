#!/usr/bin/env sh

# this script
# starts the server in background
# allowing to hot rebuild by typing "b" or "build"

# goto script directory
[[ $DIR_SCRIPTS == "" ]] && DIR_SCRIPTS=$(dirname $(readlink -f "$0"))
cd $DIR_SCRIPTS

source ./util/env_check.sh

echo "--- DEV HOT REFRESH MODE"
echo "--- server will start in background"
echo "--- enter stop (or s)to kill it"
echo "--- enter build (or b) to rebuild the client"
echo ""
echo ""
sleep 1

echo "--- starting server"
source ./start.sh &  # will run in the background
PROCESS_ID=$!

while read -p "" command
do
  case $command in
    "b") source ./build.sh && echo "--- build updated" ;;
    "build") source ./build.sh && echo "--- build updated" ;;
    "s") kill $PROCESS_ID && break ;;
    "stop") kill $PROCESS_ID && break ;;
    *) echo "--- enter one of (stop | s | build | b)" ;;
  esac
done

echo "--- server stopped"