function loadNavbar() {
    const isNestedPage = /\/(game_art_and_dev|design|autres|parcours_and_bio)\//.test(window.location.pathname);
    const siteBase = window.location.hostname.includes('github.io')
        ? 'https://aste3.github.io/cv_charlene.io/'
        : isNestedPage ? '../' : './';
    const navbarHTML = `

                <div class="logo"></div>

                <nav class="nav-links" id="navLinks">
                    <a href="${siteBase}index.html" data-page="index">Accueil</a>
                    <a href="${siteBase}game_art_and_dev/game_art_dev.html" data-page="game-art-and-dev">Game Art & Dev</a>
                    <a href="${siteBase}design/design_de_marque.html" data-page="design">Design</a>
                    <a href="${siteBase}autres/autres_competences.html" data-page="others">Autres</a>
                    <!-- Theme selector, managed by theme/theme.js -->
                    <div class="theme-toggle">
                        <button id="themeBtn" type="button" aria-pressed="false" title="Changer de thème">🌞</button>
                    </div>
                    <!-- Lang selector -->
                    <div class="lang-dropdown">
                        <button id="langBtn">🇬🇧 English</button>
                        <ul id="langMenu">
                            <li data-lang="fr">🇫🇷 Français</li>
                            <li data-lang="en">🇬🇧 English</li>
                            <li data-lang="es">🇪🇸 Español</li>
                            <li data-lang="it">🇮🇹 Italiano</li>
                        </ul>
                    </div>
                </nav>

                <button class="burger" id="burger" type="button" aria-controls="navLinks" aria-expanded="false" aria-label="Ouvrir le menu">
                    ☰
                </button>

            `;
    // 2. On insère cette navbar dans le div #navbar
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <header class="navbar">
                <div class="nav-container">
                    ${navbarHTML}
                </div>
            </header>
        `;
        console.log('Navbar loaded successfully.');

    }

    // 3. On met à jour le lien actif en fonction de la page
    highlightActiveLink();

    function highlightActiveLink() {
        // On récupère le chemin du fichier actuel, par exemple "index.html"
        const path = window.location.pathname;
        const currentFile = path.split('/').pop(); // prend la dernière partie

        // On déduit un "nom de page" simple
        let currentPage = '';

        if (path.includes('/game_art_and_dev/')) {
            currentPage = 'game-art-and-dev';
        } else if (path.includes('/design/')) {
            currentPage = 'design';
        } else if (path.includes('/autres/')) {
            currentPage = 'others';
        } else if (path.includes('/parcours_and_bio/')) {
            currentPage = 'parcours-and-bio';
        } else if (currentFile === 'index.html' || currentFile === '') {
            currentPage = 'index';
        } else if (currentFile === 'mentions-legales.html') {
            currentPage = 'mentions-legales';
        }

        // On récupère tous les liens de la navbar
        const links = document.querySelectorAll('.navbar a');

        links.forEach(link => {
            const page = link.getAttribute('data-page');

            if (page === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 4. Gestion du menu burger pour les petits écrans
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");

    burger?.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        burger.setAttribute("aria-expanded", String(isOpen));
        burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    navLinks?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            burger?.setAttribute("aria-expanded", "false");
            burger?.setAttribute("aria-label", "Ouvrir le menu");
        });
    });

    // Dropdown langue
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");

    langBtn?.addEventListener("click", () => {
        langMenu.style.display =
            langMenu.style.display === "block" ? "none" : "block";
        langBtn.setAttribute("aria-expanded", String(langMenu.style.display === "block"));
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
        if (langBtn && langMenu && !langBtn.contains(e.target) && !langMenu.contains(e.target)) {
            langMenu.style.display = "none";
            langBtn.setAttribute("aria-expanded", "false");
        }
    });


}

loadNavbar();