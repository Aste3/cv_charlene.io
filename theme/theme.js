const body = document.body;
const themeButtons = document.querySelectorAll("#themeBtn");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  const isDark = theme === "dark-mode";
  body.classList.toggle("dark-mode", isDark);
  body.classList.toggle("light-mode", !isDark);

  themeButtons.forEach(button => {
    button.textContent = isDark ? "🌞" : "🌜";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Activer le mode jour" : "Activer le mode nuit");
    button.setAttribute("title", isDark ? "Activer le mode jour" : "Activer le mode nuit");
  });
}

const initialTheme = savedTheme === "dark" || savedTheme === "dark-mode"
  ? "dark-mode"
  : savedTheme === "light" || savedTheme === "light-mode"
    ? "light-mode"
    : prefersDark ? "dark-mode" : "light-mode";

applyTheme(initialTheme);

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
});
