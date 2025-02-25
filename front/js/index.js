//ouverture et fermeture de la sidebar
document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".sidebar");
    const sidebarMenu = document.querySelector(".sidebarOuvert");

    // Ouvre/Ferme si clique sur bouton
    sidebarToggle.addEventListener("click", function (event) {
        sidebarMenu.classList.toggle("open"); 
        sidebarToggle.classList.toggle("open"); 
        event.stopPropagation();
    });

    // Ferme la sidebar si clique dehors 
    document.addEventListener("click", function (event) {
        if (!sidebarMenu.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebarMenu.classList.remove("open");
            sidebarToggle.classList.remove("open");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boutonConnexion = document.querySelector(".btConnexion");
    boutonConnexion.addEventListener("click", function () {
        window.location.href = "connexion.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boutonConnexion = document.querySelector(".accueil");
    boutonConnexion.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});