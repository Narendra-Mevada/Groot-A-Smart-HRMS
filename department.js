
// Dark/Light Mode Toggle
const toggleBtn = document.querySelector(".toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
const navItems = document.querySelectorAll(".sidebar ul li");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});
});