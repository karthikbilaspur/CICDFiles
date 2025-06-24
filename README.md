This repository contains multiple  different projects:

1. **Chatbot**: A simple chatbot that uses Natural Language Processing (NLP) to analyse user sentiment and respond accordingly.
2. **Personal Website CI/CD**: A CI/CD pipeline for a personal website built with Flask and Python.
3. **Todo List App**: A Todo List App built with Flask and Python that allows users to create, read, update, and delete todo items.
4. **Weather API**: A Flask-based weather API that retrieves weather data from OpenWeatherMap and provides a user-friendly interface to display current weather and forecasts.

## Project Overviews

### Chatbot

* Sentiment analysis using NLTK's VADER sentiment intensity analyser
* Responds to user input based on sentiment category (positive, negative, neutral)
* Logging and error handling
* Deployed using Docker and Kubernetes

### Personal Website CI/CD

* CI/CD pipeline for a personal website built with Flask and Python
* Automates build, test, and deployment process to Docker Hub and Kubernetes
* Includes Dockerfile and Kubernetes deployment configuration

### Todo List App

* Allows users to create, read, update, and delete todo items
* User-friendly interface
* Automated testing and deployment
* Includes CI/CD pipeline with GitHub Actions

### Weather API

* Retrieves current weather data and forecasts from OpenWeatherMap
* Displays weather data in a user-friendly interface
* Supports city search history
* Includes unit tests for API endpoints
* Utilises CI/CD pipeline with GitHub Actions for automated testing and deployment

## Requirements

* Python 3.9+
* Flask
* NLTK (for Chatbot)
* requests (for Weather API)
* OpenWeatherMap API key (for Weather API)
* Docker
* Kubernetes

## Setup

1. Clone the repository: `git clone https://github.com/your-username/combined-repo.git`
2. Install dependencies: `pip install -r requirements.txt`
3. Set up API keys and environment variables as needed
4. Run the applications using `flask run` or deploy using Docker and Kubernetes

## CI/CD Pipelines

Each project includes a CI/CD pipeline that automates the build, test, and deployment process. The pipelines are defined in `.github/workflows/main.yml` and include steps such as:

* Checkout code
* Set up Python
* Install dependencies
* Run unit tests
* Deploy to Docker Hub or Kubernetes

## Contributing

Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
