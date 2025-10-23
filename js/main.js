document.addEventListener("DOMContentLoaded", () => {
  // Load the navbar HTML into the #navbar container
  fetch("includes/navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Navbar fetch failed: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });
});
