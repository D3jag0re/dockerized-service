# Basic Dockerfile   

This is based off the DevOps Roadmap Project [BAsic Dockerfile](https://roadmap.sh/projects/basic-dockerfile)

Build a basic Dockerfile to create a Docker image.

This is number 10 of [21 DevOps Projects](https://roadmap.sh/devops/projects) as per roadmap.sh

## Description From Site 

In this project, you will write a basic Dockerfile to create a Docker image. When this Docker image is run, it should print “Hello, Captain!” to the console before exiting.
Requirements

- The Dockerfile should be named `Dockerfile.`
- The Dockerfile should be in the `root` directory of the project.
- The base image should be `alpine:latest.`
- The Dockerfile should contain a single instruction to print `“Hello, Captain!”` to the console before exiting.

You can learn more about writing a Dockerfile here.

- [X] If you are looking to build a more advanced version of this project, you can consider adding the ability to pass your name to the Docker image as an argument, and have the Docker image print “Hello, [your name]!” instead of “Hello, Captain!”.

### Notes 

- navigate to this directory 
- run `docker build .` can add repo and tag values `docker build . -t test1:latest`
- run `docker run test:latest` 
- if you want to change the name displayed, enter: `docker build . --build-arg name=newNameHere -t test:latest`
