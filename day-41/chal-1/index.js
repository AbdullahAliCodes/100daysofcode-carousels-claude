// JavaScript Code

// 1. Retrieve the input field:
const inputField = document.getElementById("inputField");

// 2. Retrieve the assign button:
const assignButton = document.getElementById("assignButton");

// 3. Retrieve the displayed value element:
const displayedValue = document.getElementById("displayedValue");

// 4. Add click event listener to the button:
assignButton.addEventListener("click", () => {
    // a. Retrieve the input value:
    const inputValue = inputField.value;

    // b. Assign the input value:
    displayedValue.textContent = inputValue;
});
