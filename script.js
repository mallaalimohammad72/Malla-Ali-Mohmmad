// Chatbox Toggle Function
document.getElementById("chatToggle").addEventListener("click", function () {
    let chatbox = document.getElementById("chatbox");
    chatbox.classList.toggle("open");
});

// Send Message Function
function sendMessage() {
    let message = document.getElementById('chatInput').value;
    if (message) {
        let chatDiv = document.getElementById('chat');
        let messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>You:</strong> ${message}`;
        messageElement.style.opacity = "0";
        messageElement.style.transition = "opacity 0.5s";
        
        chatDiv.appendChild(messageElement);
        setTimeout(() => messageElement.style.opacity = "1", 50);
        
        document.getElementById('chatInput').value = '';
        chatDiv.scrollTop = chatDiv.scrollHeight;
    }
}

// Feedback Form Submission
$('#feedbackForm').submit(function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
});
