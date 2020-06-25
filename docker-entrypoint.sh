#!/bin/bash
 
if [ "$1" = 'app' ]; then
    cd /root/neo4j-js-ng2 && npm start
else
    exec "$@"
fi
