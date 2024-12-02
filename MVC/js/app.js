// =====================
// Modèle (Model)
// =====================
const gameState = {
    currentView: 'accueil', // Vue actuelle ("accueil", "carte", "coffre", "plage")
    treasureFound: false,   // État du trésor
};

// =====================
// Vue (View)
// =====================
const views = {
    showAccueil: function () {
        // Charge les éléments nécessaires pour la page d'accueil
        const startButton = document.getElementById('startButton');
        if (startButton) {
            startButton.addEventListener('click', controller.commencerAventure);
        }
    },

    showCarte: function () {
        // Charge les éléments nécessaires pour la page de la carte
        const crossZone = document.querySelector('.cross-zone');
        const crossZone2 = document.querySelector('.cross-zone2');
        
        if (crossZone) {
            crossZone.addEventListener('click', controller.afficherCoffre);
        }

        if (crossZone2) {
            crossZone2.addEventListener('click', controller.afficherPlage);
        }

        // Cache les conteneurs inutiles au chargement
        document.getElementById('coffreContainer').style.display = 'none';
        document.getElementById('plageContainer').style.display = 'none';
    },

    showCoffre: function () {
        // Affiche le coffre
        document.getElementById('carteContainer').style.display = 'none';
        document.getElementById('coffreContainer').style.display = 'block';
    },

    showPlage: function () {
        // Affiche la plage
        document.getElementById('carteContainer').style.display = 'none';
        document.getElementById('plageContainer').style.display = 'block';
    },
};

// =====================
// Contrôleur (Controller)
// =====================
const controller = {
    commencerAventure: function () {
        // Redirige vers la page "carte"
        window.location.href = 'carte.html';
    },

    afficherCoffre: function () {
        gameState.treasureFound = true;
        gameState.currentView = 'coffre';
        views.showCoffre();
    },

    afficherPlage: function () {
        gameState.currentView = 'plage';
        views.showPlage();
    },

    init: function () {
        // Détecte la page actuelle
        const currentPage = document.body.getAttribute('data-page');

        if (currentPage === 'accueil') {
            gameState.currentView = 'accueil';
            views.showAccueil();
        } else if (currentPage === 'carte') {
            gameState.currentView = 'carte';
            views.showCarte();
        }
    },
};

// =====================
// Initialisation
// =====================
document.addEventListener('DOMContentLoaded', function () {
    controller.init();
});
