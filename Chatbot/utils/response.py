responses = {
    'positive': ["I'm glad to hear that!", "That's great!", "Awesome!"],
    'negative': ["I'm sorry to hear that.", "That's too bad.", "Sorry about that."],
    'neutral': ["Thank you for sharing.", "Okay, got it.", "Alright."]
}

def get_random_response(category: str) -> str:
    import random
    return random.choice(responses.get(category, ["I'm sorry, I didn't understand that."]))