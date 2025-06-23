from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"
BASE_URL = f"http://api.openweathermap.org/data/2.5/weather"
FORECAST_URL = f"http://api.openweathermap.org/data/2.5/forecast"

# Store city search history in a list
from typing import List

city_search_history: List[str] = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/weather", methods=["GET", "POST"])
def get_weather():
    if request.method == "POST":
        city = request.form["city"]
        unit = request.form["unit"]

        if not city:
            return render_template("weather.html", error="City name is required")

        params = {
            "q": city,
            "appid": API_KEY,
            "units": unit
        }

        try:
            response = requests.get(BASE_URL, params=params)
            response.raise_for_status()
            weather_data = response.json()

            # Add city to search history
            city_search_history.append(city)

            return render_template("weather.html", weather_data=weather_data, unit=unit)
        except requests.RequestException as e:
            return render_template("weather.html", error="Failed to retrieve weather data")
    else:
        return render_template("weather.html", city_search_history=city_search_history)

@app.route("/forecast", methods=["GET", "POST"])
def get_forecast():
    if request.method == "POST":
        city = request.form["city"]
        unit = request.form["unit"]

        if not city:
            return render_template("forecast.html", error="City name is required")

        params = {
            "q": city,
            "appid": API_KEY,
            "units": unit
        }

        try:
            response = requests.get(FORECAST_URL, params=params)
            response.raise_for_status()
            forecast_data = response.json()

            return render_template("forecast.html", forecast_data=forecast_data, unit=unit)
        except requests.RequestException as e:
            return render_template("forecast.html", error="Failed to retrieve forecast data")
    else:
        return render_template("forecast.html", city_search_history=city_search_history)

@app.route("/map")
def map():
    city = request.args.get("city")
    if not city:
        return render_template("map.html", error="City name is required")

    params = {
        "q": city,
        "appid": API_KEY
    }

    try:
        response = requests.get(BASE_URL, params=params)
        response.raise_for_status()
        weather_data = response.json()

        lat = weather_data["coord"]["lat"]
        lon = weather_data["coord"]["lon"]

        return render_template("map.html", lat=lat, lon=lon, city=city)
    except requests.RequestException as e:
        return render_template("map.html", error="Failed to retrieve weather data")

if __name__ == "__main__":
    app.run(debug=True)