document.getElementById("feedback-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for your message! I'll reach out soon.");
});
function login() {
  window.location.href = "home.html";
  return false;
}
