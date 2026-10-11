let bars = document.querySelectorAll(".bar");
let mid = document.querySelector(".mid");
let names = document.querySelectorAll(".name");
let bg = document.querySelector(".bg");
let profileBox = document.querySelector(".profileBox");
let scrollAmount = 0;
let fadeScrollAmount = 0;

let pageHeight = document.documentElement.scrollHeight;
let pageWidth = document.documentElement.scrollWidth;
let maxScroll = pageHeight;
let maxFadeScroll = 650;

// Empêcher le défilement de la page
document.body.style.overflow = "hidden";

// Détection du scroll avec la molette ou le tactile
window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault(); // Empêche le scroll de la page

    // Modifier directement le z-index de mid
    if (scrollAmount > 0) {
      mid.style.zIndex = "-1";
      bars.forEach((bar) => {
        bar.style.zIndex = "1";
      });
    } else {
      mid.style.zIndex = "10";
    }
    console.log(scrollAmount);
    // Ajuster la valeur du scroll en restant dans les limites
    if (event.deltaY > 0 && scrollAmount < maxScroll) {
      scrollAmount += event.deltaY * 0.5;
    } else if (
      event.deltaY < 0 &&
      scrollAmount > 0 &&
      scrollAmount < maxScroll
    ) {
      scrollAmount += event.deltaY * 0.5;
    }

    updateBars();

    if (fadeScrollAmount < 10) {
      changePage();
    }
    if (
      event.deltaY > 0 &&
      scrollAmount >= maxScroll &&
      fadeScrollAmount < maxFadeScroll
    ) {
      fadeScrollAmount += event.deltaY * 0.4;
      updateBg();
    } else if (
      event.deltaY < 0 &&
      scrollAmount >= maxScroll &&
      fadeScrollAmount > 0
    ) {
      fadeScrollAmount += event.deltaY * 0.4;
      updateBg();
    }
    if (fadeScrollAmount >= maxFadeScroll) {
      window.location.href = "/profilePage/profilePage.html";
    }
  },
  { passive: false }
);

// Empêcher le scroll sur mobile
window.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);

// Fonction pour ajuster la largeur des barres et s'assurer qu'elles couvrent toute la page à la fin du scroll
function updateBars() {
  let maxScale = document.documentElement.scrollWidth / 18.5;

  bars.forEach((bar) => {
    bar.style.transition = "transform 0.2s ease";
    let scaleFactor = 1 + (scrollAmount / maxScroll) * (maxScale - 1);
    bar.style.transform = `scaleX(${scaleFactor})`;
  });
}

// Fonction pour ajuster la taille du texte 'name' en fonction de la largeur de la fenêtre
function updateTextSize() {
  let maxSize = 150;
  let newSize = pageWidth * 0.15;
  if (newSize > maxSize) {
    newSize = maxSize;
  }

  names.forEach((name) => {
    name.style.fontSize = `${newSize}px`;
  });
}

// Mettre à jour la taille du texte dès le chargement de la page et au redimensionnement de la fenêtre
updateTextSize();

function changePage() {
  if (scrollAmount >= maxScroll) {
    bars.forEach((bar) => {
      bar.style.opacity = "0";
    });

    mid.style.opacity = "0";

    names.forEach((name) => {
      name.style.opacity = "0";
    });

    bg.style.zIndex = -1;
  } else if (fadeScrollAmount <= 0) {
    bars.forEach((bar) => {
      bar.style.opacity = "1";
    });

    mid.style.opacity = "1";

    names.forEach((name) => {
      name.style.opacity = "1";
    });

    bg.style.zIndex = "0";
  }
}

// Mettre à jour la taille du texte à chaque fois que la fenêtre est redimensionnée
window.addEventListener("resize", () => {
  pageWidth = document.documentElement.scrollWidth; // Mise à jour de la largeur de la page
  updateTextSize();
});

function updateBg() {
  let greyValue = fadeScrollAmount * 0.255;
  bg.style.backgroundColor = `rgb(${255 - greyValue}, ${255 - greyValue}, ${
    255 - greyValue
  })`;
}
