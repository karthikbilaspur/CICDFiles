from flask import Flask, request, jsonify
from utils.chatbot import ChatBot
from utils.logger import logger

app = Flask(__name__)
chatbot = ChatBot()

@app.route('/chat', methods=['POST'])
def chat():
    try:
        message = request.json['message']
        response = chatbot.respond(message)
        return jsonify({'response': response})
    except Exception as e:
        logger.error(f"Error occurred: {str(e)}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/healthcheck', methods=['GET'])
def healthcheck():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True)