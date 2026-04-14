// JavaScript Code

// 1. Wait for the DOM to be fully loaded:
document.addEventListener("DOMContentLoaded", () => {
    // 2. Get references to HTML elements:
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const modal = document.getElementById("myModal")

    // 3. Open modal event listener:
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    })
    closeModalButton.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "none";
    })

    // 4. close modal event listener:
});

