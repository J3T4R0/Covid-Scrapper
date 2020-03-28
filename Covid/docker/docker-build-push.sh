#!/usr/bin/env bash

docker build -f Docker/Dockerfile --no-cache -t J3T4R0/Covid:latest .
docker push J3T4R0/Covid:latest

# docker run --name Covid -d J3T4R0/Covid:latest