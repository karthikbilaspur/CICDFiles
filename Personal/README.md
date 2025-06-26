CI/CD Pipeline for Personal Website
Table of Contents
Overview
Prerequisites
Usage
Pipeline Steps
Docker
Kubernetes
Overview
This is a CI/CD pipeline for a personal website built with Flask and Python. The pipeline automates the build, test, and deployment process to Docker Hub and Kubernetes.
Prerequisites
Docker Hub account
Kubernetes cluster
GitHub repository with the pipeline YAML file
Secrets set up in GitHub repository settings:
DOCKER_USERNAME
DOCKER_PASSWORD
KUBECONFIG
Usage
Push changes to the main branch of the GitHub repository.
The pipeline will automatically trigger and build the Docker image.
The image will be pushed to Docker Hub.
The pipeline will deploy the image to the Kubernetes cluster.
Pipeline Steps
Checkout code: Checkout the code from the GitHub repository.
Set up Python: Set up Python 3.9 environment.
Install dependencies: Install dependencies specified in requirements.txt.
Build and deploy to Docker Hub: Build the Docker image and push it to Docker Hub.
Deploy to Kubernetes: Deploy the Docker image to the Kubernetes cluster.
Docker
The Docker image is built using the Dockerfile in the repository root. The image is pushed to Docker Hub with the tag latest.
Dockerfile
Docker
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["flask", "run", "--host=0.0.0.0"]
Kubernetes
The Kubernetes deployment is defined in the pipeline YAML file. The deployment uses the Docker image pushed to Docker Hub.
Deployment YAML
YAML
apiVersion: apps/v1
kind: Deployment
metadata:
  name: personal-website
spec:
  replicas: 1
  selector:
    matchLabels:
      app: personal-website
  template:
    metadata:
      labels:
        app: personal-website
    spec:
      containers:
      - name: personal-website
        image: ${{ secrets.DOCKER_USERNAME }}/personal-website:latest
        ports:
        - containerPort: 5000
README
This README file provides an overview of the CI/CD pipeline for the personal website. For more information on the website itself, please see the website README.
MarkDown
# Personal Website
================

## Overview
--------

This is a personal website built with Flask and Python.

## Features
------------

*   Clean and responsive design
*   Easy to navigate
*   Fast and secure

## Usage
-----

1.  Clone the repository.
2.  Install dependencies using `pip install -r requirements.txt`.
3.  Run the application using `flask run`.
4.  Open a web browser and navigate to `http://localhost:5000`.
