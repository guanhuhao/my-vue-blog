#!/bin/bash
#!/bin/bash

# 要检测的端口数组
ports=(3000 3333 8765)

# 循环检测每个端口
for port in "${ports[@]}"; do
    # 查找占用该端口的进程ID
    pid=$(lsof -ti tcp:"$port")

    if [ -n "$pid" ]; then
        echo "Port $port is occupied by PID $pid. Killing the process..."
        kill -9 "$pid"
        echo "Process $pid killed."
    else
        echo "Port $port is not occupied."
    fi
done

cd ../gin-blog-front
nohup pnpm dev > ../script/log/FE-Client.log &
cd ../script

cd ../gin-blog-admin
nohup pnpm dev > ../script/log/FE-Admin.log &
cd ../script

cd ../gin-blog-server/cmd
nohup go run main.go > ../../script/log/BE.log &
cd ../../script
