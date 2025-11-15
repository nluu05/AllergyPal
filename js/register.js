const usernameId = document.getElementById("username");
const emailId = document.getElementById("email");
const passwordId = document.getElementById("password");
const form = document.querySelector(".register-form");

function verifyCompletion() {
  // Check to see if contents are empty
  if (
    usernameId.value.trim() == "" ||
    emailId.value.trim() == "" ||
    passwordId.value.trim() == ""
  ) {
    alert("Please fill in all fields.");
    return false;
  }

  if (passwordId.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Welcome message
  alert(
    `Welcome, ${usernameId.value}! Your account will be created in a couple of seconds.`
  );
  return true;
}

function resetValues() {
  usernameId.value = "";
  emailId.value = "";
  passwordId.value = "";
}

form.addEventListener("submit", function (event) {
  if (!verifyCompletion()) {
    event.preventDefault();
    return;
  }
  setTimeout(resetValues, 500);
});
