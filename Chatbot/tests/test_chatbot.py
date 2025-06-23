import unittest
from utils.chatbot import ChatBot

class TestChatBot(unittest.TestCase):
    def test_respond(self):
        chatbot = ChatBot()
        response = chatbot.respond("I'm feeling happy today.")
        self.assertEqual(response, "I'm glad you're feeling positive!")

    def test_get_sentiment(self):
        chatbot = ChatBot()
        sentiment = chatbot.get_sentiment("I'm feeling happy today.")
        self.assertIsNotNone(sentiment)
        if sentiment is not None:
            self.assertIn('compound', sentiment)
            self.assertIsInstance(sentiment['compound'], (int, float))
            self.assertGreater(sentiment['compound'], 0.5)

if __name__ == '__main__':
    unittest.main()