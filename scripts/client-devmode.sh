#!/usr/bin/env bash
cd $(dirname "$0") # goto this file directory

cd ../client && npm run dev
