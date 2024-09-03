#!/bin/bash
docker run --name mysql-server -v /home/lighthouse/my-vue-blog/data/mysql:/data -e MYSQL_ROOT_PASSWORD=19990320 -p 3306:3306 -d mysql:8
docker run --name redis-server -v /home/lighthouse/my-vue-blog/data/redis:/data -p 6379:6379 -d redis:7
