# dockerized-service 

This is based off the DevOps Roadmap Project [Dockerized Service](https://roadmap.sh/projects/dockerized-service-deployment)

Use GitHub Actions to Deploy a Dockerized Node.js Service 

This is number 15 of [21 DevOps Projects](https://roadmap.sh/devops/projects) as per roadmap.sh

## Description From Site 

The goal of this project is to dockerize a simple Node.js service and deploy it to a remote server using GitHub Actions. You will also practice secrets management.

## Requirements

There are 4 parts to this project:

- Step 1 — Creating a Node.js service
- Step 2 — Dockerizing the Node.js service
- Step 3 — Setup a remote Linux Server
- Step 4 — Deploying the Dockerized Node.js service to a remote server using GitHub Actions

## Part 1: Creating a Node.js service

You are required to create a simple Node.js service with two routes:

- `/` route - which simply returns `Hello, world!`
- `/secret route` - protected by Basic Auth

Project should have a `.env` file with the following variables:

- `SECRET_MESSAGE` - the secret message that the `/secret` route should return
- `USERNAME` - the username for the Basic Auth
- `PASSWORD` - the password for the Basic Auth

When user visits the `/secret` route, they should be prompted for the username and password. If the username and password are correct, they should be able to see the secret message. If the username and password are incorrect, they should see an error message.

## Part 2: Dockerizing the Node.js service

Create a Dockerfile for the Node.js service that will build a Docker image. You should be able to run the Docker image locally. Make sure that the .env file is not included in the Docker image.

## Part 3: Setup a remote Linux Server

Setup a remote Linux server on either DigitalOcean, AWS, or any other provider. You can either set it up manually by using SSH or use a mix of Ansible or Terraform from previous projects.

## Part 4: Deploy the Dockerized Node.js service

Create a workflow that will build a Docker image and push it to the container registry. The workflow should then deploy the Docker image to the remote server. Feel free to explore secrets management in GitHub Actions. I will leave the implementation details to you.

Once you are done with the project, you will have practiced dockerizing applications, setting up remote servers, implementing CI/CD workflows and secrets management.

# Notes 

## To Run Locally:

- Build Docker Image: `docker build -t hello-world .`
- Run Image: `docker run -d -p 4001:4000 hello-world`
- Open the app: `http://$(docker-machine ip default):4001` default on local machine is localhost or 127.0.0.1
- To check logs `docker logs <container-id>`
- If changes are made to the app, you will need to rebuild the image. 

## To Run via CI/CD On Digital Ocean: 

- Create a Spaces Bucket and keys (for remote state management)
- Create Repository secrets in GitHub for DO_TOKEN and keys above (DO_SPACES_ACCESS_KEY && DO_SPACES_SECRET_KEY)

## Development Notes:

- [X] First made a simple hello, world app in docker container 
- [X] Used express framework 
- [X] Tested .env file by using SECRET_MESSAGE in the /secret route response 
- [X] Implemented Basic Auth for the /secret route
- [X] Terraform for digital ocean deployment (local)
- [X] Terraform with remote state (locally run)
- [X] GitHub Actions for terraform deployment
- [ ] GitHub Actions for Container build and push
- [ ] Github Actions for Container deployment 

## Cost Notes: 

- Digital Ocean Spaces Bucket costs $5/m

## Lessons Learned: 

- Read all the docs before wondering why terraform can't get creds (did not set variables before running init)

- exporting variables in GHA steps DO NOT PERSIST across subsequent steps. Therefore had to modify step to write them to GITHUB_ENV. (i.e. echo to github_env instead of export)

