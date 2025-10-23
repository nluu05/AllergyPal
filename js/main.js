document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  fetch("includes/navbar.html")
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(html => (document.getElementById("navbar").innerHTML = html))
    .catch(err => console.error("Error loading navbar:", err));

  // Load Footer
  fetch("includes/footer.html")
    .then(res => res.ok ? res.text() : Promise.reject(res))
    .then(html => (document.getElementById("footer").innerHTML = html))
    .catch(err => console.error("Error loading footer:", err));
});
