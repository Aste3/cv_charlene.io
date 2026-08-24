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
  alert("Bienvenue sur mon CV interactif ! Cliquez sur les sections pour en savoir plus sur mes compétences et expériences. N'hésitez pas à changer de thème et de langue pour une expérience personnalisée. Bonne visite ! PS je suis en train de développer ce CV, alors certaines fonctionnalités sont encore en cours de construction. Merci de votre patience !");
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

//  CARDS - Afficher/Masquer les sections
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

// BUTTERFLIES ANIMATION
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


// //CANVAS POUR LES CELLULES//

// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");

// const cellsBackground = document.getElementById("cells-background");

// cellsBackground.appendChild(canvas);

// canvas.style.width = "100%";
// canvas.style.height = "100%";
// canvas.style.display = "block";


// // ========================================
// // CONFIGURATION
// // ========================================

// const settings = {

//     // Nombre de cellules
//     points: 35,

//     // Taille générale
//     size: 160,

//     // Vitesse
//     speed: 0.25,

//     // Opacité des cellules
//     opacity: 0.25,

//     // Intensité du mouvement
//     movement: 0.7,

//     // Interaction souris
//     mouseInteraction: true,

//     // Distance d'influence de la souris
//     mouseDistance: 180
// };


// // ========================================
// // CANVAS
// // ========================================

// let width;
// let height;

// function resizeCanvas() {

//     const dpr = window.devicePixelRatio || 1;

//     width = window.innerWidth;
//     height = window.innerHeight;

//     canvas.width = width * dpr;
//     canvas.height = height * dpr;

//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// }

// resizeCanvas();

// window.addEventListener("resize", resizeCanvas);


// // ========================================
// // SOURIS
// // ========================================

// const mouse = {

//     x: null,
//     y: null

// };

// window.addEventListener("mousemove", (event) => {

//     mouse.x = event.clientX;
//     mouse.y = event.clientY;

// });

// window.addEventListener("mouseleave", () => {

//     mouse.x = null;
//     mouse.y = null;

// });


// // ========================================
// // CELLULES
// // ========================================

// const cells = [];

// for (let i = 0; i < settings.points; i++) {

//     cells.push({

//         x: Math.random() * window.innerWidth,

//         y: Math.random() * window.innerHeight,

//         size:
//             settings.size *
//             (0.55 + Math.random() * 0.9),

//         speedX:
//             (Math.random() - 0.5) *
//             settings.speed,

//         speedY:
//             (Math.random() - 0.5) *
//             settings.speed,

//         rotation:
//             Math.random() * Math.PI * 2,

//         rotationSpeed:
//             (Math.random() - 0.5) * 0.001,

//         sides:
//             Math.floor(5 + Math.random() * 4),

//         opacity:
//             0.3 + Math.random() * 0.7

//     });

// }


// // ========================================
// // COULEUR
// // ========================================

// function getCellColor() {

//     /*
//        On utilise une couleur blanche
//        semi-transparente.

//        Elle fonctionne donc aussi bien
//        avec le mode sombre qu'avec le
//        mode clair.
//     */

//     return `rgba(255,255,255,${settings.opacity})`;

// }


// // ========================================
// // DESSIN D'UNE CELLULE
// // ========================================

// function drawCell(cell) {

//     ctx.save();

//     ctx.translate(cell.x, cell.y);

//     ctx.rotate(cell.rotation);

//     ctx.beginPath();

//     const points = cell.sides;

//     for (let i = 0; i < points; i++) {

//         const angle =
//             (Math.PI * 2 / points) * i;

//         /*
//            Petite variation pour éviter
//            d'avoir des polygones parfaits.
//         */

//         const variation =
//             0.75 +
//             Math.sin(i * 3.7 + cell.rotation) * 0.18;

//         const radius =
//             cell.size * variation;

//         const x =
//             Math.cos(angle) * radius;

//         const y =
//             Math.sin(angle) * radius;

//         if (i === 0) {

//             ctx.moveTo(x, y);

//         } else {

//             ctx.lineTo(x, y);

//         }

//     }

//     ctx.closePath();

//     ctx.fillStyle = getCellColor();

//     ctx.globalAlpha = cell.opacity;

//     ctx.fill();

//     ctx.restore();

// }


// // ========================================
// // ANIMATION
// // ========================================

// function animate() {

//     ctx.clearRect(
//         0,
//         0,
//         width,
//         height
//     );


//     for (const cell of cells) {

//         // ----------------------------
//         // Mouvement naturel
//         // ----------------------------

//         cell.x +=
//             cell.speedX *
//             settings.movement;

//         cell.y +=
//             cell.speedY *
//             settings.movement;


//         cell.rotation +=
//             cell.rotationSpeed;


//         // ----------------------------
//         // Interaction souris
//         // ----------------------------

//         if (
//             settings.mouseInteraction &&
//             mouse.x !== null
//         ) {

//             const dx =
//                 cell.x - mouse.x;

//             const dy =
//                 cell.y - mouse.y;

//             const distance =
//                 Math.sqrt(dx * dx + dy * dy);


//             if (
//                 distance <
//                 settings.mouseDistance
//             ) {

//                 const force =
//                     (settings.mouseDistance - distance)
//                     / settings.mouseDistance;

//                 cell.x +=
//                     (dx / distance) *
//                     force *
//                     0.8;

//                 cell.y +=
//                     (dy / distance) *
//                     force *
//                     0.8;

//             }

//         }


//         // ----------------------------
//         // Réapparition sur les bords
//         // ----------------------------

//         const margin = cell.size * 1.5;


//         if (cell.x < -margin) {

//             cell.x = width + margin;

//         }

//         if (cell.x > width + margin) {

//             cell.x = -margin;

//         }

//         if (cell.y < -margin) {

//             cell.y = height + margin;

//         }

//         if (cell.y > height + margin) {

//             cell.y = -margin;

//         }


//         // ----------------------------
//         // Dessin
//         // ----------------------------

//         drawCell(cell);

//     }


//     requestAnimationFrame(animate);

// }

// animate();
