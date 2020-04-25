1) To build docker image:

docker run -p 49160:8080 -d <your username>/node-web-app .

2) To create a container from the image:

docker run -p 49160:8081 -d <your username>/node-web-app

-d = detached mode
-p = port. From outside access, localhost:49160 , which will point to 8081 where node is running.

3) To stop the container:

docker stop [container_id]