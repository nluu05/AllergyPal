
document.addEventListener("DOMContentLoaded", () => {
  // load header & footer
  fetch("includes/navbar.html")
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(html => (document.getElementById("navbar").innerHTML = html))
    .catch(err => console.error("Error loading navbar:", err));

  fetch("includes/footer.html")
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(html => (document.getElementById("footer").innerHTML = html))
    .catch(err => console.error("Error loading footer:", err));

  // popup
  const popup = document.getElementById("wip-popup");
  const openBtn = document.getElementById("openPopup");
  const closeBtn = document.querySelector(".close");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  });

