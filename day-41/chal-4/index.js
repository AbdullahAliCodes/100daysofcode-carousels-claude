// 1. Select Input Field:
const inputField = document.getElementById("inputField");

// 2. Select Store Button:
const storeButton = document.getElementById("storeButton");

// 3. Select Clear Button:
const clearButton = document.getElementById("clearButton");

// 4. Select Message Paragraph:
const message = document.getElementById("message");

// 5. Event listener for Store Button:
storeButton.addEventListener("click", () => {
    const enteredText = inputField.value;
    if (enteredText) {
        localStorage.setItem("storedText", enteredText);
        // Changed to textContent
        message.textContent = "Text successfully stored in Local Storage!";
    }
    else {
        // Changed to textContent
        message.textContent = "Please enter text before storing.";
    }
});

// 6. Event listener for Clear Button:
clearButton.addEventListener("click", () => {
    localStorage.removeItem("storedText");
    message.textContent = "Local Storage cleared.";
});

// 7. Display stored text on page load:
const storedText = localStorage.getItem("storedText");

// 8. Displaying Stored Text
if (storedText) {
    message.textContent = `Stored Text: ${storedText}`;
}