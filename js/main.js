document.addEventListener("DOMContentLoaded", () => {
  // load proper navbar
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log("loaded");
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
          const username = localStorage.getItem("username");
          const usernameDisplay = document.querySelector(".username-display");
          if (usernameDisplay && username) {
            usernameDisplay.textContent = "Hello, " + username + "!";
          }
        }

        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
          logoutBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            logout();
          });
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

// login related helper functions
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

// allergen management
document.addEventListener('DOMContentLoaded', () => {
  const addSelect = document.getElementById('allergen-add-select');
  const addBtn = document.getElementById('add-allergen-btn');
  const removeSelect = document.getElementById('allergen-remove-select');
  const removeBtn = document.getElementById('remove-allergen-btn');
  const listEl = document.getElementById('allergen-list');

  const allergenLabels = {
    peanuts: 'Peanuts',
    tree_nuts: 'Tree Nuts (e.g., almonds, walnuts, cashews)',
    milk: 'Milk',
    eggs: 'Eggs',
    fish: 'Fish',
    shellfish: 'Shellfish (e.g., shrimp, crab, lobster)',
    wheat: 'Wheat',
    soy: 'Soy',
    sesame: 'Sesame',
    mustard: 'Mustard',
    sulfites: 'Sulfites'
  };

  let currentAllergens = [];

  function renderRemoveDropdown() {
    removeSelect.innerHTML = '';

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.textContent = 'Select an allergen';
    removeSelect.appendChild(placeholder);

    currentAllergens.forEach((value) => {
      const opt = document.createElement('option');
      opt.value = value;
      opt.textContent = allergenLabels[value];
      removeSelect.appendChild(opt);
    });
  }

  function renderAllergenList() {
    listEl.innerHTML = '';
    currentAllergens.forEach((value) => {
      const li = document.createElement('li');
      li.dataset.value = value;
      li.textContent = allergenLabels[value];
      listEl.appendChild(li);
    });
  }

  function renderAll() {
    renderAllergenList();
    renderRemoveDropdown();
  }

  addBtn.addEventListener('click', () => {
    const value = addSelect.value;
    if (!value) return;

    if (!currentAllergens.includes(value)) {
      currentAllergens.push(value);
    }

    addSelect.value = '';
    renderAll();
  });

  removeBtn.addEventListener('click', () => {
    const value = removeSelect.value;
    if (!value) return;

    currentAllergens = currentAllergens.filter(a => a !== value);
    renderAll();
  });

  renderAll();
});
