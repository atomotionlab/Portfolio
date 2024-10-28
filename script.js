document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    let currentProject = 0;

    // Fonction pour afficher le projet en fonction de l'index
    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = "none"; // Cacher tous les projets
        });
        projects[index].style.display = "block"; // Afficher le projet actuel
    }

    // Gestion du bouton "Suivant"
    document.getElementById("next-project").addEventListener("click", function () {
        currentProject = (currentProject + 1) % projects.length; // Passer au projet suivant
        showProject(currentProject);
    });

    // Gestion du bouton "Précédent"
    document.getElementById("prev-project").addEventListener("click", function () {
        currentProject = (currentProject - 1 + projects.length) % projects.length; // Revenir au projet précédent
        showProject(currentProject);
    });

    // Afficher le premier projet par défaut au chargement de la page
    showProject(currentProject);

    
});

