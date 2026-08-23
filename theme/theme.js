const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme") || "light-mode";

body.classList.add(savedTheme);

function updateThemeButton() {
  if (themeBtn) {
    themeBtn.textContent = body.classList.contains("dark-mode") ? "🌜" : "🌞";
  }
}

updateThemeButton();

themeBtn?.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-mode");
  const newTheme = isDark ? "light-mode" : "dark-mode";

  body.classList.toggle("dark-mode", !isDark);
  body.classList.toggle("light-mode", isDark);
  localStorage.setItem("theme", newTheme);
  updateThemeButton();
});
