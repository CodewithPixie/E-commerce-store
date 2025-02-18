const loginForm = document.getElementById("loginForm")
const email = document.getElementById("email");
const password = document.getElementById("password");

// Add event listener to handle form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the page from reloading

  // Get user input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Check if fields are empty (basic validation)
  if (email === "" || password === "") {
      alert("Please fill in both fields.");
      return;
  }

  // Simulate login logic (replace this with real authentication later)
  console.log("Email:", email);
  console.log("Password:", password);

  // Example: Show success message (You can replace this with an actual login request)
  alert("Login successful (not really, just a test 😆)");

  // Clear input fields after submission
  loginForm.reset();
});
