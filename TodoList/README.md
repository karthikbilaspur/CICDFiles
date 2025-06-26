
Todo List App with CI/CD Pipeline
Table of Contents
Overview
Features
Requirements
Usage
CI/CD Pipeline
Tests
Overview
This is a Todo List App built with Flask and Python. The app allows users to create, read, update, and delete todo items. The app also includes a CI/CD pipeline that automates the build, test, and deployment process.
Features
Create, read, update, and delete todo items
User-friendly interface
Automated testing and deployment
Requirements
Python 3.9
Flask
Heroku account (for deployment)
Usage
Clone the repository.
Install dependencies using pip install -r requirements.txt.
Run the application using flask run.
Open a web browser and navigate to http://localhost:5000.
CI/CD Pipeline
The CI/CD pipeline is defined in the .github/workflows/main.yml file. The pipeline includes the following steps:
Checkout code
Set up Python
Install dependencies
Format code with Black
Lint code with Flake8
Run tests with Coverage
Upload coverage report to Codecov
Build and deploy to Heroku
Tests
The app includes unit tests that cover the following scenarios:
Get todo list
Create new todo item
Delete todo item
Update todo item
The tests are run using the unittest framework and are included in the tests directory.
Running Tests
To run the tests, use the following command:
Bash
coverage run -m unittest discover -s tests
Code Coverage
The app uses Codecov to track code coverage. The coverage report is uploaded to Codecov after each test run.
Deployment
The app is deployed to Heroku using the Heroku Deploy action. The deployment process is automated and triggered after each successful test run.
Kubernetes Deployment
The app also includes a Kubernetes deployment configuration file (deployment.yaml) that defines a deployment and service for the app.
Service
The service is defined in the service.yaml file and exposes the app to external traffic.
Style
The app uses a custom CSS stylesheet (style.css) to define the layout and design of the app.
Contributing
Contributions are welcome! To contribute, please fork the repository and submit a pull request.
License
The app is licensed under the MIT License. See the LICENSE file for more information.