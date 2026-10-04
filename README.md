# DevOps Docker Task

## Student Information
Name: Asma
Student ID: 2026-SE-33541
Course: DevOps

## Application Description
A simple Node.js (Express) web application that displays the student name, student ID, course name and a message that it is running inside a Docker container.

## Technologies Used
- Git
- GitHub
- Docker
- Docker Hub
- Node.js (Express)

## Dockerfile Explanation
- `FROM node:20-alpine`: base image (Node.js 20 on lightweight Alpine Linux)
- `WORKDIR /app`: sets the working directory inside the container
- `COPY package*.json ./`: copies dependency files first so Docker can cache the install layer
- `RUN npm install`: installs dependencies
- `COPY . .`: copies the rest of the application files
- `EXPOSE 3000`: documents that the app listens on port 3000
- `CMD ["npm", "start"]`: command that starts the application

## .dockerignore
Keeps node_modules, logs, .git, .env and README.md out of the build context, so the image stays small, builds faster and does not leak secrets.

## Docker Commands
    docker build -t juw33541/devops-task:v1 .
    docker images
    docker run -d -p 3000:3000 --name devops-task juw33541/devops-task:v1
    docker ps
    docker logs devops-task
    docker inspect devops-task
    docker login
    docker push juw33541/devops-task:v1

## Docker Hub
Docker Hub Repository: https://hub.docker.com/r/juw33541/devops-task

## How to Run
    docker pull juw33541/devops-task:v1
    docker run -d -p 3000:3000 --name devops-task juw33541/devops-task:v1

Open http://localhost:3000

## Screenshots
1. GitHub repository: ![GitHub](screenshots/1-github.png)
2. Dockerfile: ![Dockerfile](screenshots/2-dockerfile.png)
3. Docker build: ![Build](screenshots/3-build.png)
4. Running container (docker ps): ![ps](screenshots/4-docker-ps.png)
5. Application in browser: ![Browser](screenshots/5-browser.png)
6. Docker Hub repository: ![Hub](screenshots/6-dockerhub.png)
7. Docker pull and run: ![Pull](screenshots/7-pull.png)
8. .dockerignore: ![dockerignore](screenshots/8-dockerignore.png)
