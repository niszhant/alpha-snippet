1) To build docker image:

docker build -t <your username>/node-web-app .

2) To create a container from the image:

docker run -p 49160:8081 -d <your username>/node-web-app

-d = detached mode
-p = port. From outside access, localhost:49160 , which will point to 8081 where node is running.

For dockerised socket-io app, use same port :

> docker run -p 8081:8081 -d niszhant/socket-io-impl


Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built:

3) To stop the container:

docker stop [container_id]

Note:

Create a .dockerignore file in the same directory as your Dockerfile with following content:

node_modules
npm-debug.log

This will prevent your local modules and debug logs from being copied onto your Docker image and possibly overwriting modules installed within your image.