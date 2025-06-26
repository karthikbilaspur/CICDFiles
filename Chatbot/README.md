
README
Chatbot Project
This project is a simple chatbot that uses Natural Language Processing (NLP) to analyze user sentiment and respond accordingly. The chatbot is built using Flask and deployed using Docker and Kubernetes.
Features
Sentiment analysis using NLTK's VADER sentiment intensity analyzer
Responds to user input based on sentiment category (positive, negative, neutral)
Logging and error handling
Deployed using Docker and Kubernetes
Project Structure
app.py: Flask application that handles user input and responds accordingly
utils/chatbot.py: Chatbot logic and sentiment analysis
utils/logger.py: Logging configuration
utils/response.py: Response generation
test_chatbot.py and test_sentimental_analysis.py: Unit tests for chatbot and sentiment analysis
deployment.yaml and service.yaml: Kubernetes deployment and service configuration
Dockerfile: Docker image configuration
Requirements
Python 3.9
Flask
NLTK
Docker
Kubernetes
Installation
Clone the repository
Run pip install -r requirements.txt to install dependencies
Run nltk.download('vader_lexicon') and nltk.download('punkt') to download NLTK data
Build the Docker image using docker build -t chatbot .
Deploy to Kubernetes using kubectl apply -f deployment.yaml and kubectl apply -f service.yaml
Usage
Run the Flask application using flask run
Send a POST request to /chat with a JSON body containing the user input
The chatbot will respond with a sentiment-based response
API Endpoints
/chat: Handles user input and responds accordingly
/healthcheck: Returns a healthy status
Testing
Run unittest using python -m unittest discover to run unit tests.
Logging
Logs are stored in chatbot.log and can be viewed using kubectl logs or Docker logs.