/********************************************
 * Script principal du site Le Caféier
 * - Effet de défilement fluide vers les sections
 ********************************************/

document.addEventListener('DOMContentLoaded', function () {
    // On récupère tous les liens de navigation qui pointent vers des ancres internes (#...)
    const liens_navigation = document.querySelectorAll('.menu-principal a, .hero-actions a');

    liens_navigation.forEach(function (lien_navigation) {
        lien_navigation.addEventListener('click', function (evenement) {
            const ancre_cible = lien_navigation.getAttribute('href');

            // On ne traite que les liens internes (ceux qui commencent par #)
            if (ancre_cible && ancre_cible.startsWith('#')) {
                const element_cible = document.querySelector(ancre_cible);

                if (element_cible) {
                    evenement.preventDefault();

                    // Décalage pour ne pas coller le titre sous le header sticky
                    const hauteur_entete = 80;
                    const position_cible = element_cible.offsetTop - hauteur_entete;

                    window.scrollTo({
                        top: position_cible,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
