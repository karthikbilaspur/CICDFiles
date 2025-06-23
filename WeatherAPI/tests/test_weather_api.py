import unittest
from WeatherAPI.app import app

class TestWeatherAPI(unittest.TestCase):
    def test_get_weather(self):
        tester = app.test_client()
        response = tester.get("/weather?city=London")
        self.assertEqual(response.status_code, 200)

    def test_get_weather_invalid_city(self):
        tester = app.test_client()
        response = tester.get("/weather?city=InvalidCity")
        self.assertEqual(response.status_code, 500)

if __name__ == "__main__":
    unittest.main()