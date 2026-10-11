// Écouter l'événement 'DOMContentLoaded' pour s'assurer que le DOM est entièrement chargé
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner outlineBox (le <body>) et profileBox
  const outlineBox = document.body;
  const profileBox = document.getElementById("profileBox");

  // Afficher d'abord l'outlineBox
  setTimeout(() => {
    outlineBox.classList.add("visible");

    // Afficher la profileBox après un délai supplémentaire
    setTimeout(() => {
      profileBox.classList.add("visible");
    }, 1000); // Délai de 1 seconde après que l'outlineBox soit visible
  }, 500); // Délai initial pour l'outlineBox
});
