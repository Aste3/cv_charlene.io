function loadFooter() {
    const isNestedPage = /\/(game_art_and_dev|design|autres|parcours_and_bio)\//.test(window.location.pathname);
    const siteBase = window.location.hostname.includes('github.io')
        ? 'https://aste3.github.io/cv_charlene.io/'
        : isNestedPage ? '../' : './';
    const footerHTML = `<section class="footer">
        <a href="${siteBase}game_art_and_dev/game_art_dev.html">Game Art et Dev</a>
        <a href="${siteBase}design/design_de_marque.html">Design de Marque</a>
        <a href="${siteBase}autres/autres_competences.html">Autres compétences</a>
        <p>&copy; 2026 Charlène C. Tous droits réservés. </p>
        <p><a href="${siteBase}mentions-legales.html">Mentions légales</a></p>
    </section>`
 // 2. on insère ce footer dans la div #footer
 const footerContainer = document.getElementById('footer');
 if (footerContainer) {
    footerContainer.innerHTML = `
        ${footerHTML}`
    };


}

loadFooter()