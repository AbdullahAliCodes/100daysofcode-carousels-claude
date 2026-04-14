// JavaScript Code:

// 1. Wait for the DOM to be fully loaded:
document.addEventListener("DOMContentLoaded", () => {
    // 2. Get a resizable element using its id:
    const resizableElement = document.getElementById("resizableElement");

    // 3. Add mouseover event listener:
    resizableElement.addEventListener("mouseover", () => {
        // a. Increase the width:
        resizableElement.style.width = "150px";
        // b. Update the inner HTML:
        resizableElement.innerHTML = "150px";
    });

    // 4. Add mouseout event listener:
    resizableElement.addEventListener("mouseout", () => {
        // a. Reset the width:
        resizableElement.style.width = "100px";
        // b. Update the inner HTML:
        resizableElement.innerHTML = "100px";
    });
});