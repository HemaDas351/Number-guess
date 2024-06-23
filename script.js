// Generate a random target number between 1 and 50
let targetNumber = Math.floor(Math.random() * 50) + 1;
console.log("Target number:", targetNumber);

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    let userGuess = parseInt(document.getElementById("guess").value);
    let message = document.getElementById("message");

    // Validate the user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        message.textContent = "Please enter a valid number between 1 and 50.";
    } else {
        // Check if the guess is correct, too low, or too high
        if (userGuess === targetNumber) {
            message.textContent = `Congratulations! ${targetNumber} is correct. You guessed it right!`;
            message.style.color = "green";
            disableInputAndButton();
        } else if (userGuess < targetNumber) {
            message.textContent = `${userGuess} is too low. Try again.`;
            message.style.color = "blue";
        } else {
            message.textContent = `${userGuess} is too high. Try again.`;
            message.style.color = "orange";
        }
    }

    // Clear input field for the next guess
    document.getElementById("guess").value = "";
}

// Function to disable input and button after correct guess
function disableInputAndButton() {
    document.getElementById("guess").disabled = true;
    document.querySelector("button").disabled = true;
}
