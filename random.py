import random

# Define responses for different user inputs
responses = {
    "hi": ["Hello!", "Hi there!", "Hey!"],
    "how are you?": ["I'm good, thank you!", "Feeling great!", "All good, thanks for asking!"],
    "bye": ["Goodbye!", "See you later!", "Bye, take care!"],
    "default": ["Sorry, I didn't understand that.", "Can you please rephrase?", "I'm not sure what you mean."]
}

# Function to generate response based on user input
def get_response(user_input):
    input_text = user_input.lower()
    return responses.get(input_text, random.choice(responses["default"]))

# Main function to interact with the user
def chat():
    print("ChatBot: Hi! How can I help you today?")
    
    while True:
        user_input = input("You: ").strip()
        
        if user_input.lower() == 'bye':
            print("ChatBot: Goodbye!")
            break
        
        response = get_response(user_input)
        print("ChatBot:", response)

# Run the chatbot
if __name__ == "__main__":
    chat()
