# Docker Compose
Containarization of a microservice using docker and Docker compose with container health check implementation.

 ## Instructions for running program
    Run `docker compose up` in the applicaiton directory after cloning

## prerequisite
    - Make sure docker is installed before performing containerization

## Steps undertaken 
After installing Docker and docker desktop a docker file was created in a application directory of a simple Node application.
Firstly, the application image was created using docker `build` the microservice was run with docker `run` with the container.
Next, we used docker compose file to setup and create the docker image and container.
We also implemented container health check within the docker compose file that test for the application using curl command in few time interval and restarts if any failure is detected.
 Finally, pushed the docker image to the registry bhupendrap96/51p-app:latest
