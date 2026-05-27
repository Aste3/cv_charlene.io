// CV Propre - JavaScript pour interactivité

alert("Bienvenue sur mon CV interactif ! Cliquez sur les sections pour en savoir plus sur mes compétences et expériences. N'hésitez pas à changer de thème et de langue pour une expérience personnalisée. Bonne visite ! PS je suis en train de développer ce CV, alors certaines fonctionnalités sont encore en cours de construction. Merci de votre patience !");

// Mode dark/light
const themeBtn = document.getElementById("themeBtn");
const body = document.body;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark-mode") {
  body.classList.add("dark-mode");
  themeBtn.textContent = "🌜";
} else {
  body.classList.add("light-mode");
  themeBtn.textContent = "🌞";
}

themeBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
  themeBtn.textContent = body.classList.contains("dark-mode") ? "🌜" : "🌞";
});


//NAVBAR
// Burger menu

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dropdown langue
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "block" ? "none" : "block";
});

// Sélection langue
document.querySelectorAll("#langMenu li").forEach(item => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang");

    console.log("langue changée à :", lang);
    alert("Fonction de changement de langue à implémenter : " + lang);

    // Update bouton
    langBtn.textContent = item.textContent.split(" ")[0] + " " + lang.toUpperCase();

    langMenu.style.display = "none";
  });
});

// Fermer si clic ailleurs
document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.style.display = "none";
  }
});

// Afficher/Masquer les sections
function showSection(sectionId) {
  // Masquer toutes les sections
  const sections = document.querySelectorAll("#bureautique, #horticulture, #graphisme");
  sections.forEach(section => {
    section.style.display = "none";
  });

  // Afficher la section cliquée
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}