import unittest
from utils.sentiment_analyzer import SentimentAnalyzer

class TestSentimentAnalyzer(unittest.TestCase):
    def test_analyze_sentiment(self):
        analyzer = SentimentAnalyzer()
        sentiment = analyzer.analyze_sentiment("I love this product!")
        self.assertGreater(sentiment['compound'], 0.5)

    def test_get_sentiment_category(self):
        analyzer = SentimentAnalyzer()
        sentiment = {'compound': 0.6}
        category = analyzer.get_sentiment_category(sentiment)
        self.assertEqual(category, 'positive')

if __name__ == '__main__':
    unittest.main()