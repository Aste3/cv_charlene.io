# Liste des ameliorations possibles

Document de travail local. Ce fichier est volontairement ignore par Git via `.gitignore`.
Aucune amelioration ci-dessous n'est implementee dans le code pour le moment.

## Priorites recommandees

- [ ] Stabiliser la structure commune des pages : conteneur general, navbar et footer partages.
- [ ] Corriger le positionnement du footer sur `Game Art et Dev` et `Design de marque`.
- [ ] Centraliser tout le mode jour/nuit dans `theme/` et supprimer les regles concurrentes.
- [ ] Nettoyer les doublons CSS et les blocs commentes devenus inutiles.
- [ ] Remplacer les balises HTML invalides et corriger les imbrications de conteneurs.
- [ ] Enrichir en priorite la page `Game Art et Dev`, qui porte le coeur du portfolio.
- [ ] Rendre les interactions robustes, accessibles et utilisables au clavier.
- [ ] Finaliser la gestion des langues ou retirer temporairement le controle incomplet.
- [ ] Tester chaque page sur mobile, tablette et grand ecran, en modes clair et sombre.

## 1. Architecture et composants partages

- [ ] Definir une structure de page commune : `body > header + main + footer`, avec un conteneur general reutilisable.
- [ ] Choisir une strategie de composants adaptee au site statique : fragments HTML generes par JavaScript, ou duplication minimale documentee si aucun outil de build n'est souhaite.
- [ ] Transformer la navbar en composant commun afin d'avoir les memes liens, controles, espacements, comportements mobile et attributs d'accessibilite partout.
- [ ] Transformer le footer en composant commun afin d'avoir une hauteur, des liens, une hierarchie et une position coherentes sur toutes les pages.
- [ ] Centraliser les variables visuelles dans un seul endroit : polices, couleurs, espacements, largeur maximale, niveaux de superposition et rayons.
- [ ] Eviter que les feuilles de style de chaque page redéfinissent `body`, `header`, `a`, `.navbar`, `.nav-links`, `.footer` et les controles communs.
- [ ] Decider quels styles appartiennent au socle commun et quels styles restent propres a une page.
- [ ] Ajouter une largeur maximale et des marges laterales communes pour eviter que le contenu s'etire excessivement.

## 2. Footer et hauteur des pages

- [ ] Corriger le footer de `game_art_and_dev/game_art_dev.html` et `design/design_de_marque.html`, actuellement dependant de styles repetes et d'une structure sans mise en page verticale fiable.
- [ ] Utiliser une mise en page de page robuste, par exemple `body` en flex colonne avec `main` extensible et footer repousse en bas par `margin-top: auto`.
- [ ] Donner au contenu principal une structure semantique `<main>` au lieu de divs racines isolees.
- [ ] Supprimer les fermetures `</div>` orphelines et les conteneurs commentes qui rendent la hauteur difficile a prevoir.
- [ ] Verifier le cas des pages courtes et longues : footer en bas de la fenetre quand le contenu est court, apres le contenu quand il deborde.
- [ ] Harmoniser le footer de la page d'accueil et celui des mentions legales, qui n'ont actuellement pas les memes liens ni la meme structure.
- [ ] Ajouter un lien vers les mentions legales dans le footer commun.

## 3. Mode jour/nuit

- [ ] Faire de `theme/theme.css` l'unique proprietaire des couleurs et fonds du mode clair/sombre.
- [ ] Faire de `theme/theme.js` l'unique proprietaire de la lecture, de l'application et de la sauvegarde du theme.
- [ ] Retirer de `cv_propre.css` les regles `body.dark-mode`, `body.light-mode` et les variantes de couleurs liees au theme, puis les remplacer par des variables CSS communes si necessaire.
- [ ] Examiner `background/dark.css` et `background/dark.js` : soit les integrer clairement a `theme/`, soit les supprimer/archiver s'ils ne sont plus utilises.
- [ ] Ne pas charger de logique de theme concurrente depuis plusieurs dossiers.
- [ ] Supprimer le doublon de `background-image` dans `theme/theme.css`.
- [ ] Definir des variables comme `--color-text`, `--color-background`, `--color-surface` et `--color-link`, puis les changer selon `[data-theme]` ou les classes retenues.
- [ ] Choisir une convention unique entre classes `light-mode`/`dark-mode` et attribut `data-theme`.
- [ ] Ajouter `aria-pressed`, un `title` et un libelle accessible au bouton de theme, plutot que de dependre uniquement des emojis.
- [ ] Respecter `prefers-color-scheme` comme valeur initiale si aucune preference locale n'est sauvegardee.
- [ ] Tester la lisibilite des textes, liens, boutons, menus, cartes et images dans les deux modes.

## 4. CSS et qualite visuelle

- [ ] Supprimer les declarations dupliquees, notamment les deux blocs `.footer` presents dans plusieurs feuilles de style.
- [ ] Comparer puis fusionner les styles quasi identiques de `game_art_dev.css`, `design_de_marque.css` et `autres_competences.css`.
- [ ] Retirer les anciennes regles mortes et les commentaires de code volumineux, en particulier les blocs HTML/CSS des anciennes versions.
- [ ] Remplacer les valeurs contradictoires comme `overflow: hidden` puis `overflow-y: auto` par une seule intention explicite.
- [ ] Remplacer les tailles fixes excessives comme `80px` et `8rem` par une echelle responsive avec des limites raisonnables.
- [ ] Unifier la famille typographique : `theme/theme.css` definit les polices partagees alors que certaines pages retombent sur Arial.
- [ ] Verifier les contrastes et les etats `:hover`, `:focus-visible`, `:active` et `:disabled`.
- [ ] Ajouter des styles de focus visibles pour la navbar, les boutons, le menu de langue, les images et la lightbox.
- [ ] Ajouter `max-width: 100%`, `height: auto` et des ratios stables aux images de portfolio.
- [ ] Eviter les selecteurs trop generiques (`body`, `header`, `main`, `section`, `a`) dans les feuilles propres aux pages.
- [ ] Corriger l'indentation et les espaces en debut de fichier pour faciliter la maintenance.
- [ ] Verifier les chemins relatifs des images et des polices depuis chaque sous-dossier.

## 5. HTML, semantique et accessibilite

- [ ] Remplacer `lang="en"` par `lang="fr"` sur les pages majoritairement en francais, ou rendre le contenu reellement multilingue.
- [ ] Ajouter un `<main>` sur toutes les pages principales.
- [ ] Remplacer les `<div>` de contenu par des `<section>` avec titres hierarchises lorsque cela correspond au sens du contenu.
- [ ] Corriger les balises invalides `<br></br>` en retablissant les espacements via CSS ou en utilisant `<br>` seulement quand il est semantiquement necessaire.
- [ ] Donner un texte au logo ou un `aria-label` si le logo reste visuellement vide.
- [ ] Remplacer le bouton burger textuel par un bouton accessible avec `aria-expanded` et `aria-controls`.
- [ ] Rendre le menu de langue navigable au clavier et annoncer son etat ouvert/ferme.
- [ ] Utiliser des boutons pour les elements interactifs plutot que des images seulement cliquables, avec un comportement clavier.
- [ ] Verifier les textes alternatifs : decrire le contenu ou le role de chaque image, et marquer les images purement decoratives.
- [ ] Ajouter des titres d'onglet descriptifs et distincts pour chaque page.
- [ ] Ajouter un lien d'evitement vers le contenu principal.
- [ ] Verifier les erreurs de validation HTML, les ids dupliques et la hierarchie des titres.

## 6. JavaScript et interactions

- [ ] Proteger les acces a `burger`, `navLinks`, `langBtn` et `langMenu` afin qu'un script charge sur une page sans ces elements ne provoque pas d'erreur.
- [ ] Deplacer l'execution de `cv_propre.js` dans une initialisation commune fiable, ou separer les comportements de la page d'accueil de ceux de la navbar.
- [ ] Supprimer l'alerte de bienvenue bloquante, ou la remplacer par un message non intrusif et accessible.
- [ ] Supprimer les anciens blocs de code commentes et les `console.log` de production.
- [ ] Implementer le changement de langue au lieu d'afficher une alerte indiquant que la fonction reste a faire.
- [ ] Utiliser `locales/fr.json` comme base d'une vraie strategie de traduction et definir le comportement si une traduction manque.
- [ ] Fermer le menu burger apres selection d'un lien et lors d'un clic hors menu.
- [ ] Fermer les menus avec `Escape` et gerer le focus lors de leur ouverture.
- [ ] Gerer l'absence de `.butterfly-container` avant d'appeler `appendChild`.
- [ ] Respecter `prefers-reduced-motion` pour les papillons, les transitions et les animations.
- [ ] Verifier que `showSection` ne masque pas des sections attendues lorsqu'un hash inconnu est fourni.
- [ ] Ajouter une navigation complete de la lightbox : fermeture clavier, focus initial, restauration du focus et eventuellement navigation entre images.

## 7. Contenu et portfolio

### Game Art et Dev

- [ ] Ajouter une introduction claire : profil, type de projets recherches, specialites et approche de travail.
- [ ] Organiser les competences par categories : 2D, 3D, game design, developpement, narration et pipeline de production.
- [ ] Pour chaque outil, indiquer le niveau, les usages maitrises et un exemple de realisation : Photoshop, Maya, ZBrush, Blender, Clip Studio Paint, Visual Studio et Unreal Engine.
- [ ] Ajouter des projets concrets avec image, contexte, role, livrables, outils, contraintes et resultat.
- [ ] Ajouter des liens vers les portfolios et profils pertinents : ArtStation, Behance, GitHub, LinkedIn, itch.io ou autres plateformes effectivement utilisees.
- [ ] Ajouter des apercus de modelisation, textures, concept art, storyboards, prototypes et captures de jeu avec des textes alternatifs utiles.
- [ ] Ajouter une section processus : recherche, ideation, production, iterations, retours et finalisation.
- [ ] Ajouter une section projets en cours et une section projets termines, avec dates et statut.
- [ ] Preciser le niveau reel de Python et du developpement web afin de distinguer apprentissage, pratique et experience professionnelle.
- [ ] Ajouter un appel a contact contextualise pour une collaboration, un stage ou une opportunite professionnelle.

### Design de marque

- [ ] Remplacer la liste generique de competences par une presentation du processus de marque : brief, recherche, direction artistique, identite, declinaisons et livraison.
- [ ] Documenter chaque projet avec le besoin initial, le role, les choix visuels, les supports et les resultats.
- [ ] Ajouter des mockups et des exemples de declinaisons plutot que seulement des logos.
- [ ] Corriger les textes et alt actuellement ambigus ou incoherents, notamment `Garage`/`garagErasmus` et le nom ASSO Groupe/Alfa Solaire.
- [ ] Ajouter une vraie description pour chaque galerie et un etat visible quand elle est ouverte.
- [ ] Ajouter les projets pertinents dans les liens de portfolio externes.

### Autres competences

- [ ] Structurer les experiences avec dates, lieux, missions et competences acquises.
- [ ] Ajouter une courte introduction qui explique le lien entre les experiences administratives, creatives et techniques.
- [ ] Remplacer `Loisir` par `Loisirs` et ajouter une description concise si ces activites servent le positionnement professionnel.
- [ ] Ajouter les niveaux de langue avec une echelle coherente et explicite.
- [ ] Verifier l'ordre et les drapeaux des langues, actuellement certains emojis ne correspondent pas au libelle.

## 8. SEO, performance et maintenance

- [ ] Donner a chaque page un `<title>` specifique et une meta description adaptee.
- [ ] Ajouter une structure Open Graph minimale pour les partages sociaux.
- [ ] Verifier les noms de fichiers et de dossiers pour limiter les variations de casse et les erreurs de deploiement.
- [ ] Optimiser le poids et les dimensions des images du portfolio, avec `loading="lazy"` pour les galeries hors ecran.
- [ ] Precharger seulement les polices necessaires et verifier leur poids.
- [ ] Ajouter un favicon coherent a toutes les pages.
- [ ] Ajouter une verification automatique simple : validation HTML, recherche des liens casses, controle des ressources introuvables et test des deux themes.
- [ ] Documenter dans `note.txt` ou un README les commandes, conventions de structure et procedure de publication GitHub Pages.
- [ ] Supprimer ou integrer les fichiers experimentaux (`background/`, anciens blocs commentes, scripts non charges) pour reduire la confusion.

## Recommandation de decoupage

1. Stabiliser le socle : conteneur general, navbar, footer, theme et responsive.
2. Nettoyer les HTML/CSS : doublons, balises invalides, commentaires morts et styles generiques.
3. Rendre les interactions fiables : menu, theme, langue, lightbox et animations.
4. Enrichir `Game Art et Dev` avec projets, outils, exemples et liens externes.
5. Enrichir les deux autres pages, puis faire une passe accessibilite, SEO et performance.
