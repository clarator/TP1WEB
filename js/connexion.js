// pour le choix de connexion ou inscription
const choixElements = document.querySelectorAll(".choixConnexion");

choixElements.forEach((choix) => {
    choix.addEventListener("click", function() {
        choixElements.forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});


// pour faire afficher le formulaire de connexion ou d'inscription
document.addEventListener("DOMContentLoaded", function () { 
    const choixConnexion = document.querySelector(".choixConnexion");
    const choixInscription = document.querySelector(".choixInscription");
    const connexion = document.querySelector(".connexion");
    const inscription = document.querySelector(".inscription");

    // Afficher Connexion par défaut
    connexion.style.display = "flex";
    inscription.style.display = "none";

    choixConnexion.addEventListener("click", function () {
        choixInscription.style.borderBottom = "none ";
        choixConnexion.style.borderBottom = "4px solid white";
        connexion.style.display = "flex";
        inscription.style.display = "none";
    });

    choixInscription.addEventListener("click", function () {
        choixInscription.style.borderBottom = "4px solid white";
        choixConnexion.style.borderBottom = "none";
        inscription.style.display = "flex";
        connexion.style.display = "none";

    });
});

// pour la connexion et l'inscription
document.addEventListener("DOMContentLoaded", function () {
    const formInscription = document.querySelector(".formInscription");
    
    // Vérification si l'élément existe avant d'ajouter l'écouteur d'événements
    if (formInscription) {
        formInscription.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = e.target.querySelector(".email").value;
            const password = e.target.querySelector(".password").value;
            const password2 = e.target.querySelector(".password2").value;

            if (email === "" || password === "" || password2 === "") {
                alert("Veuillez remplir tous les champs");
            } else if (password !== password2) {
                alert("Les mots de passe ne correspondent pas");
            } else {
                localStorage.setItem(email, password);
                console.log("Inscription réussie");
                formInscription.reset();
            }
        });
    } else {
        console.log("Formulaire d'inscription non trouvé !");
    }

    const formConnexion = document.querySelector(".formConnexion");

    // Vérification si l'élément existe avant d'ajouter l'écouteur d'événements
    if (formConnexion) {
        formConnexion.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = e.target.querySelector(".email").value;
            const password = e.target.querySelector(".password").value;

            const storedPassword = localStorage.getItem(email);

            if (email === "" || password === "") {
                alert("Veuillez remplir tous les champs");
            } else if (!storedPassword) {
                alert("Email non trouvé");
            } else if (password !== storedPassword) {
                alert("Mot de passe incorrect");
            } else {
                window.location.href = "index.html"; 
                console.log("Connexion réussie");
            }
        });
    } else {
        console.log("Formulaire de connexion non trouvé !");
    }
});