// CV Propre - JavaScript pour interactivité
// a rerregarder pour les commentaires et les alertes
window.addEventListener("load", () => {
  const hash = location.hash.replace("#", "");
  if (hash) {
    showSection(hash);
  }
}); 

console.log("CV interactif chargé et prêt à l'emploi !"+window.location.pathname);
// ancienne alerte de bienvenue //
const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/");
if (isIndexPage) {
  // alert("Bienvenue sur mon CV interactif ! Cliquez sur les sections pour en savoir plus sur mes compétences et expériences. N'hésitez pas à changer de thème et de langue pour une expérience personnalisée. Bonne visite ! PS je suis en train de développer ce CV, alors certaines fonctionnalités sont encore en cours de construction. Merci de votre patience !");
} else {
  console.log("On est pas sur la page d'accueil, pas d'alerte de bienvenue.");
}

// const pathname = window.location.pathname;
// const isIndexPage =
//   pathname === "/" ||
//   pathname.endsWith("/index.html") ||
//   pathname.endsWith("/");

// if (isIndexPage) {
//   alert("Bienvenue sur mon CV interactif ...");
// }

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
  // Masquer toutes les sections ciblées par les boutons
  const sections = document.querySelectorAll("#game_art_dev, #autre, #design");
  sections.forEach(section => {
    section.style.display = "none";
  });

  // Afficher la section cliquée
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

const container = document.querySelector(".butterfly-container");

function createButterfly(side) {

    const butterfly = document.createElement("div");

    butterfly.classList.add("butterfly");

    // Position horizontale
    if (side === "left") {
        butterfly.style.left = Math.random() * 18 + "vw";
    } else {
        butterfly.style.right = Math.random() * 18 + "vw";
    }

    // Taille aléatoire
    const size = Math.random() * 0.8 + 0.6;

    // Vitesse aléatoire
    const duration = Math.random() * 5 + 5;

    // Mouvement horizontal
    const movement = (Math.random() * 80 - 40) + "px";

    butterfly.style.setProperty("--size", size);
    butterfly.style.setProperty("--duration", duration + "s");
    butterfly.style.setProperty("--movement", movement);

    // Décalage aléatoire
    butterfly.style.animationDelay =
        "-" + Math.random() * duration + "s";

    container.appendChild(butterfly);
}


// Papillons à gauche
for (let i = 0; i < 10; i++) {
    createButterfly("left");
}


// Papillons à droite
for (let i = 0; i < 10; i++) {
    createButterfly("right");
}



/* =========================
   CANVAS PARTICULES
   ========================= */

const canvas = document.getElementById("network-background");
const ctx = canvas.getContext("2d");


/* =========================
   RÉGLAGES DE L'ANIMATION
   ========================= */

const settings = {

    // Nombre de points
    points: 70,

    // Distance maximale entre deux points
    maxDistance: 180,

    // Vitesse des points
    speed: 0.35,

    // Taille des points
    pointSize: 2,

    // Couleur des points et des lignes
    color: "#22ff88",

    // Opacité maximale des lignes
    lineOpacity: 0.35,

    // Opacité des points
    pointOpacity: 0.8,

    // Distance d'influence de la souris
    mouseRadius: 180,

    // Force d'attraction vers la souris
    mouseForce: 0.015
};


/* =========================
   DIMENSIONS DU CANVAS
   ========================= */

let width;
let height;

function resizeCanvas() {

    width = window.innerWidth;
    height = window.innerHeight;

    const ratio = window.devicePixelRatio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();


/* =========================
   SOURIS
   ========================= */

const mouse = {

    x: null,
    y: null

};


window.addEventListener("mousemove", function (event) {

    mouse.x = event.clientX;
    mouse.y = event.clientY;

});


window.addEventListener("mouseleave", function () {

    mouse.x = null;
    mouse.y = null;

});


/* =========================
   CRÉATION DES PARTICULES
   ========================= */

const particles = [];


function createParticles() {

    particles.length = 0;

    for (let i = 0; i < settings.points; i++) {

        particles.push({

            x: Math.random() * width,
            y: Math.random() * height,

            vx: (Math.random() - 0.5) * settings.speed,
            vy: (Math.random() - 0.5) * settings.speed

        });

    }
}


createParticles();


/* =========================
   ANIMATION
   ========================= */

function animate() {

    /* Efface l'image précédente */

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /* =========================
       DÉPLACEMENT
       ========================= */

    particles.forEach(function (particle) {

        particle.x += particle.vx;
        particle.y += particle.vy;


        /* Rebond horizontal */

        if (
            particle.x <= 0 ||
            particle.x >= width
        ) {

            particle.vx *= -1;

        }


        /* Rebond vertical */

        if (
            particle.y <= 0 ||
            particle.y >= height
        ) {

            particle.vy *= -1;

        }


        /* =========================
           INTERACTION SOURIS
           ========================= */

        if (
            mouse.x !== null &&
            mouse.y !== null
        ) {

            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );


            if (
                distance < settings.mouseRadius
            ) {

                particle.x +=
                    dx * settings.mouseForce;

                particle.y +=
                    dy * settings.mouseForce;

            }

        }

    });


    /* =========================
       LIGNES
       ========================= */

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const p1 = particles[i];
            const p2 = particles[j];

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );


            /* Si les points sont suffisamment proches */

            if (
                distance < settings.maxDistance
            ) {

                const opacity =
                    (
                        1 -
                        distance / settings.maxDistance
                    ) *
                    settings.lineOpacity;


                ctx.beginPath();

                ctx.moveTo(
                    p1.x,
                    p1.y
                );

                ctx.lineTo(
                    p2.x,
                    p2.y
                );


                ctx.strokeStyle =
                    hexToRgba(
                        settings.color,
                        opacity
                    );


                ctx.lineWidth = 1;

                ctx.stroke();

            }

        }

    }


    /* =========================
       POINTS
       ========================= */

    particles.forEach(function (particle) {

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            settings.pointSize,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            hexToRgba(
                settings.color,
                settings.pointOpacity
            );


        ctx.fill();

    });


    /* =========================
       IMAGE SUIVANTE
       ========================= */

    requestAnimationFrame(animate);
}


/* =========================
   CONVERSION HEX → RGBA
   ========================= */

function hexToRgba(hex, opacity) {

    hex = hex.replace("#", "");

    const r = parseInt(
        hex.substring(0, 2),
        16
    );

    const g = parseInt(
        hex.substring(2, 4),
        16
    );

    const b = parseInt(
        hex.substring(4, 6),
        16
    );


    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}


/* =========================
   LANCEMENT
   ========================= */

animate();