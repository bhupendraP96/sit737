# Publishing to Goggle cloud Platform
Publishing the microservice application to the Google cloud Platform

 ## Instructions for running program
    -pull the image from the GCP registry using `docker pull australia-southeast2-docker.pkg.dev/sit737-25t1-pandey-7aec7f5/sit737-2025-prac5d/my-gcp-app:1`
    -Run the microservice application pulled from GCP with `docker run`


## Steps undertaken 
After installing Docker and docker desktop a docker file was created in a application directory of a simple Node application.
Firstly, the application image was created using docker `build`. The image was then tagged and puished to the Artifact Registry in the Google Cloud Platform.
The image and be retrieved from the GCP and run the microservice following the instructions above.
