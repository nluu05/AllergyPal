document.addEventListener("DOMContentLoaded", () => {
  // load proper navbar
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const navbarFile = isLoggedIn
    ? "includes/navbar-user.html"
    : "includes/navbar-guest.html";
  const navbarContainer = document.getElementById("navbar");

  if (navbarContainer) {
    fetch(navbarFile)
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then((html) => {
        navbarContainer.innerHTML = html;
        
        // username
        if (isLoggedIn) {
          const username = localStorage.getItem('username');
          const usernameDisplay = document.querySelector('.username-display');
          if (usernameDisplay && username) {
            usernameDisplay.textContent = "Hello, " + username + "!";
          }
        }
      })
      .catch((err) => console.error("Error loading navbar:", err));
  }

  // footer
  fetch("includes/footer.html")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((html) => (document.getElementById("footer").innerHTML = html))
    .catch((err) => console.error("Error loading footer:", err));

  // popup
  const popup = document.getElementById("wip-popup");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.querySelector(".close");

  if (popup && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  // login form submit
  const loginForm = document.querySelector(".register-form");
  if (loginForm && window.location.pathname.includes("login.html")) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); 

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username && password) {
        login(username);
      } else {
        alert("Please enter both username and password");
      }
    });
  }
});

function login(username) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", username);
  window.location.href = "usermain.html";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "guestmain.html";
}

