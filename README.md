# FibonacciNumbers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Obraz developreski
###### Dockerfile.dev

Komenda do zbudowania obrazu: `docker build -f Dockerfile.dev -t local/fib-app:v1 .`

Komenda do uruchomienia kontenera: `docker run -it -p 4200:4200 -v /app/node_modules -v $(pwd):/app local/fib-app:v1`

## Obraz produkcyjny
###### Dockerfile

Komenda do zbudowania obrazu: `docker build -t local/fib-app:v2 .`

Komenda do uruchomienia kontenera: ` docker run -d -p 4200:80 local/fib-app:v2 `

###### docker-compose

Komenda do uruchomienia: `COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose up`
