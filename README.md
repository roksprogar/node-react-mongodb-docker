# Docker commands

Clean up all the non-running containers and images.

```
docker system prune -a
```

Pull an image

```
docker pull docker/getting-started
```

List all images

```
docker images
```

Run a container based on the unique part of an image.

```
docker run -d cb9
```

List all running containers images

```
docker ps
```

List all containers images

```
docker ps -a
```

Stop a running container by a part of its unique id.

```
docker stop fe8
```

Remove a stopped container by a part of its unique id.

```
docker rm fe8
```

Remove an unused image by a part of its unique id.

```
docker rmi cb9
```

# Docker volumes

Pull a mongodb image.

```
docker pull mongo
```

Run a mongodb container and name it.

```
docker run -d -p 27017:27017 --name mongodb mongo
```

Stop and remove a running docker container.

```
docker rm -f 9a8
```

Start a new container with a volume in the current dir.

```
docker run -d -p 27017:27017 -v $(pwd)/mongodb:/data/db mongo
```

# Sample express app

Create an express app

```
mkdir express
cd express
npx express-generator
npm install
# npm start - starts a server on localhost:3000
cd ..
```

Pull a node image

```
docker pull node
```

Run a detached node container with a volume and a work dir.

```
docker run -ti -p 3000:3000 -v $(pwd)/express:/var/www -w /var/www node npm start
```

# Dockerfile

Build and tag the image from a dockerfile in the current dir.

```
docker build -t nodeapp .
```

Run a container off of the image and "link" it to the mongodb container.

```
docker run -ti -p 3000:3000 --name nodeapp --link mongodb nodeapp
```

# Docker networks

Create a docker network

```
docker network create --driver bridge mynetwork
```

List all docker networks

```
docker network ls
```

Run the containers on the network

```
docker run -ti -p 27017:27017 --name mongodb --net=mynetwork -v $(pwd)/mongodb:/data/db mongo
docker run -ti -p 3000:3000 --name nodeapp --net=mynetwork nodeapp
```

# docker-compose

Build the images.

```
docker compose build
```

Build the images and run the containers as detached.

```
docker compose up -d --build
```

Stop the running containers without removing them.

```
docker compose stop
```

Start the stopped containers.

```
docker compose start
```

Stop the running containers and remove them.

```
docker compose down
```

Show the logs.

```
docker compose logs
```
