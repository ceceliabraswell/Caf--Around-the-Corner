const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// send email function for contact form
function sendEmail() {
  alert("Email sent!");
  document.getElementById("reset").reset();
}
