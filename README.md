# Grocery Management API

## Project Setup

### 1. Local Setup

- Make sure Node is installed in the system and run following command

  ```bash
  git clone https://github.com/nabinthapaa/grocery-management-api
  cd grocery-management-api
  npm i
  ```

- Create `.env` file in the root of project and fill according to [.example.env](https://github.com/nabinthapaa/grocery-management-api/blob/main/.example.env)
- Run migration using command and seed

  ```bash
  npm run migrate
  npm run run:seed
  ```

- Finally run the server using command

  ```bash
  npm run start
  ```

### 2. Docker Setup

- Make sure docker is installed and the daemon is running
- Make sure docker compose is also installed
  - If not installed you can follow steps here [Install docker compose](https://github.com/nabinthapaa/grocery-management-api/.example.env)
- Run following command to start a server

  ```bash
  docker compose up --build
  ```

- To make changes a reload the server without restarting docker

  ```bash
  docker compose up --build --watch
  ```

### 3. Hosted API test

Updating soon

## API Routes

API documentation is done using swagger.js. So, it is easier to find the
routes on the server. Follow the following steps to see the api docs and
routes

- Once the server is running you can go to [Api docs](http://localhost:8000/api-docs)
  - Or `your-hosted-url/api-docs`

## Environment used during developement

This project was done using docker development sever with docker compose
and watch for reloading and syncing any changes

- Docker version: `27.2.0, build 3ab4256958`
  - Node Version in docker: `v22.8.0`
  - npm version in docker: `10.8.2`
