01: Document Ready Event

The code begins with an event listener for the 'DOMContentLoaded' event, ensuring that the JavaScript code executes only after the HTML document has been fully loaded.
02: Open Modal Button

Use 'getElementById' to select the button element with ID 'openModalButton'.
Store the selected button in a constant variable named 'openModalButton'.
03: Close Modal Button

Use 'getElementById' to select the button element with ID 'closeModalButton'.
Store the selected button in a constant variable named 'closeModalButton'.
04: Modal Button

Use 'getElementById' to select the button element with ID 'myModal'.
Store the selected button in a constant variable named 'modal'.
05: Open the Modal

Add a click event listener on 'openModalButton'.
Inside the event listener, set the display property of 'modal' is equal to 'block'.
06: Close the Modal

Add a click event listener on 'closeModalButton' with the function's parameter 'event'.
Inside the event listener, perform the following operations:
a: Prevent Default

Set 'event.preventDefault()' to prevent an event's default behavior.
b: Display None

Set the display property of 'modal' is equal to 'none'.
07: Testing

Click on the Test button to verify your code with the provided test cases.
08: Submission

After passing all the test cases, click on the Submit button to submit your code.
