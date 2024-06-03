document.addEventListener("DOMContentLoaded", () => {
    addBotMessage("Hello! How can I help you today?");
});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addUserMessage(userMessage);
        userInput.value = "";
        getBotResponse(userMessage);
    }
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.className = "message user-message";
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.className = "message bot-message";
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    let botResponse = "";

    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hi there!";
    } else if (userMessage.toLowerCase().includes("help")) {
        botResponse = "Sure, I'm here to help. What do you need assistance with?";
    } else {
        botResponse = "Sorry, I didn't understand that. Can you please rephrase?";
    }

    setTimeout(() => {
        addBotMessage(botResponse);
    }, 1000);
}
