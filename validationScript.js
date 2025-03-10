// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", function(event) {
        // Retrieve the input field value
        const inputValue = inputField.value;

        // Regular expression pattern for alphanumeric input
        const pattern = /^[a-zA-Z0-9]+$/;

        // Check if the input value matches the pattern
        if (!pattern.test(inputValue)) {
            // Invalid input: display error message and prevent form submission
            errorMessage.textContent = "Invalid input. Please enter alphanumeric text only.";
            event.preventDefault();
        } else {
            // Valid input: clear error message
            errorMessage.textContent = "";
        }
    });
});