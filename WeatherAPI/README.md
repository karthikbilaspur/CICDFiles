
# Weather API CI/CD

A Flask-based weather API that retrieves weather data from OpenWeatherMap and provides a user-friendly interface to display current weather and forecasts.

## Features

* Retrieves current weather data and forecasts from OpenWeatherMap
* Displays weather data in a user-friendly interface
* Supports city search history
* Includes unit tests for API endpoints
* Utilizes CI/CD pipeline with GitHub Actions for automated testing and deployment

## Requirements

* Python 3.9+
* Flask
* requests
* OpenWeatherMap API key

## Setup

1. Clone the repository: `git clone https://github.com/your-username/weather-api.git`
2. Install dependencies: `pip install -r requirements.txt`
3. Set up OpenWeatherMap API key: `export API_KEY=your-api-key`
4. Run the application: `flask run`

## CI/CD Pipeline

The CI/CD pipeline is defined in `.github/workflows/main.yml` and includes the following steps:

* Checkout code
* Set up Python
* Install dependencies
* Run unit tests
* Deploy to Google Cloud App Engine
* Notify on failure or success

## Docker

The project includes a Dockerfile for containerization. To build and run the Docker image:

1. Build the image: `docker build -t weather-api .`
2. Run the container: `docker run -p 5000:5000 weather-api`

## Kubernetes

The project includes Kubernetes deployment and service definitions in `deployment.yaml` and `service.yaml`. To deploy to a Kubernetes cluster:

1. Apply the deployment: `kubectl apply -f deployment.yaml`
2. Apply the service: `kubectl apply -f service.yaml`

## Contributing

Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added.

## License

This project is licensed under the MIT License. See `LICENSE` for details.