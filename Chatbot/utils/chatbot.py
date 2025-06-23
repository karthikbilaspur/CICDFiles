
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class SentimentAnalyzer:
    def __init__(self):
        self.sia = SentimentIntensityAnalyzer()

    def analyze_sentiment(self, text: str) -> dict:
        try:
            sentiment = self.sia.polarity_scores(text)
            return sentiment
        except Exception as e:
            logger.error(f"Error occurred: {str(e)}")
            return {}

    def get_sentiment_category(self, sentiment: dict) -> str:
        if sentiment.get('compound', 0) > 0.5:
            return 'positive'
        elif sentiment.get('compound', 0) < -0.5:
            return 'negative'
        else:
            return 'neutral'

    def analyze_text(self, text: str) -> dict:
        sentiment = self.analyze_sentiment(text)
        category = self.get_sentiment_category(sentiment)
        return {
            'sentiment': sentiment,
            'category': category
        }

class ChatBot:
    def __init__(self):
        self.sentiment_analyzer = SentimentAnalyzer()
        self.responses = {
            'positive': ["I'm glad to hear that!", "That's great!", "Awesome!"],
            'negative': ["I'm sorry to hear that.", "That's too bad.", "Sorry about that."],
            'neutral': ["Thank you for sharing.", "Okay, got it.", "Alright."]
        }

    def respond(self, text: str) -> str:
        analysis = self.sentiment_analyzer.analyze_text(text)
        category = analysis['category']
        return self.get_random_response(category)

    def get_random_response(self, category: str) -> str:
        import random
        responses = self.responses.get(category, ["I'm sorry, I didn't understand that."])
        return random.choice(responses)

def main():
    nltk.download('vader_lexicon')
    nltk.download('punkt')
    chatbot = ChatBot()
    while True:
        text = input("You: ")
        if text.lower() == 'quit':
            break
        response = chatbot.respond(text)
        print("Bot:", response)

if __name__ == "__main__":
    main()