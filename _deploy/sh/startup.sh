#!/bin/bash

cd ../docker-config

if [ -n "$1" ];
then

    docker-compose stop "$1" && docker-compose up --build -d "$1"
else
    docker-compose stop && docker-compose up --build -d
fi
