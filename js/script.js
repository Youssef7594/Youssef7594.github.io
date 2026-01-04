/************** NAVBAR ******************/ 

// Sélection de la navbar
const navbar = document.querySelector('nav');

// Fonction pour détecter le scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        // Ajoute la classe 'scrolled' lorsque l'utilisateur a scrollé de plus de 80px
        navbar.classList.add('scrolled');
    } else {
        // Retire la classe 'scrolled' si l'utilisateur remonte en haut de la page
        navbar.classList.remove('scrolled');
    }
});


    /* bouton hamburger  */

    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const liste = document.querySelector('.liste');
    
        hamburger.addEventListener('click', () => {
            liste.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    });