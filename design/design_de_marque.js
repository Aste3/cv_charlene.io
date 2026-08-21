// // Gestion du clic sur les images de projets
// document.querySelectorAll(".project-img").forEach(img => {
//   img.addEventListener("click", function() {
//     console.log("Clic sur l'image du projet :", this.getAttribute("data-project"));
//     const projectId = this.getAttribute("data-project");
//     const gallery = document.getElementById("gallery_" + projectId);
    
//     if (gallery) {
//       gallery.classList.toggle("hidden");
//     }
//   });
// });
// const projects = document.querySelectorAll(".project-img");

const projects = document.querySelectorAll(".project-img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
}

function openLightbox(image) {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
}

projects.forEach(project => {

    project.addEventListener("click", () => {
        if (!project.dataset.project) {
            openLightbox(project);
            return;
        }

        const projectName = project.dataset.project;
        const currentGallery = document.getElementById(
            "gallery_" + projectName
        );

        // Ferme toutes les autres galeries
        document.querySelectorAll(".gallery").forEach(gallery => {
            if (gallery !== currentGallery) {
                gallery.classList.add("hidden");
            }
        });

        // Ouvre / ferme celle qui vient d'être sélectionnée
        currentGallery.classList.toggle("hidden");
    });

});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
    }
});

