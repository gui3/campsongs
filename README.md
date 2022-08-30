# Song book project

This is a "school" project
for learning & demonstrating development skills.

## concept

A web application to note your songs and organise them.

## use

### local use

The `scripts` folder includes the main scripts
for **setup**, **build** & **start**.
They default to development mode,
to run in production mode use `NODE_ENV=production <path to script>`.
The setup script comes first !

```sh
NODE_ENV=development ./scripts/setup.sh 
NODE_ENV=development ./scripts/build.sh
NODE_ENV=development ./scripts/start.sh
```

### hot reload with dev.sh
```sh
NODE_ENV=development ./scripts/dev.sh
```
starts the server in a child process,
allowing you to rebuild the client in the same terminal

- enter `build` or `b` to build
- enter `stop` or `s` to stop the server & exit

### Docker use

if you use Docker, you will find scripts
for **build** (image), **run** (container),
**stop** (will remove the container) & **remove** (the image).

```sh
./scripts/docker/build.sh
./scripts/docker/run.sh

# later
./scripts/docker/stop.sh

# to delete the image:
./scripts/docker/remove.sh
```

### note on scripts

Variables like PORT, IMAGE_NAME or CONTAINER_NAME are yet to be implemented

## structure & technologies

The client side is a static **React** application
hosted by an **Express** server
which serves also a JSON api (under the `/api` path).
The api hits a database 
(local **sqlite3** in development, **postgresql** in production)
using a lightweight SQL tool (**knex**).

