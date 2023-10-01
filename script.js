const themeToggle = document.getElementById('themeToggle');
const popup = document.getElementById('popup');
const typingText = document.getElementById('typing-text');

// Hide the popup initially
popup.style.display = 'none';

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Toggle is switched on
        openPopup();
        displayAllSentences();
    } else {
        // Toggle is switched off
        closePopup();
        clearText();
    }
});

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

const sentences = [
    "Connecting to server...",
    "please wait ...",
    "Checking connection ...",
    "Acquiring license ...",
    "Validating subscription ...",
    "Starting Anti ban ...",
    "please wait ...",
    "Started successful ...",
    "Connection success!",
    "You are free to play ... GG ❤️"
];

let currentIndex = 0;
let displayTimeout;

function displayAllSentences() {
    function displayNextSentence() {
        if (currentIndex < sentences.length) {
            typingText.textContent += sentences[currentIndex] + '\n\n'; // Add a newline character
            currentIndex++;

            const randomDelay = Math.floor(Math.random() * 1000) + 500; // Random delay between 0.5 and 1.5 seconds
            displayTimeout = setTimeout(displayNextSentence, randomDelay);
        }
    }

    displayNextSentence();
}

function clearText() {
    currentIndex = 0;
    typingText.textContent = '';
    clearTimeout(displayTimeout);
}


