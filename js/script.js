/************** NAVBAR ******************/ 

// Sélection de la navbar
const navbar = document.querySelector('nav');

// Fonction pour détecter le scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        // Ajoute la classe 'scrolled' lorsque l'utilisateur a scrollé de plus de 50px
        navbar.classList.add('scrolled');
    } else {
        // Retire la classe 'scrolled' si l'utilisateur remonte en haut de la page
        navbar.classList.remove('scrolled');
    }
});