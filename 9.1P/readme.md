# MongoDB StatefulSet Deployment on Kubernetes

This repository contains the Kubernetes configuration files required to deploy a MongoDB Replica Set using a StatefulSet. The deployment includes persistent storage, a headless service, and proper configuration for primary-secondary replica architecture.

## Components

The setup includes the following Kubernetes resources:

- **Kubernetes Dashboard** admin user and cluster role binding
- **ConfigMap** for MongoDB configuration
- **Secrets** for sensitive data like authentication credentials
- **StatefulSet** with 3 MongoDB pods (`mongo-0`, `mongo-1`, `mongo-2`)
- **Headless Service** to manage stable network identities for each pod
- **Persistent Volumes** for data persistence

## Setup Instructions
- clone the repository
- Execute configurations to add admin user and cluster role binding.
- Execute configurations for creating configMap, Secrets, Headless Service and Stateful set
- Access the shell for one of the pod and make it a primary pod with write access
- Add a data with the primary pod to the database
- Access the data from the secondary pods with read only access as a slave


