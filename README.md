# Louis Copmartin

Portfolio personnel développé avec React et Vite. Interface en français et en anglais, projets filtrables, fiches détaillées, navigation au clavier et mise en page responsive.

## Aperçu

Un aperçu autonome peut être ouvert dans un navigateur sans serveur ni installation :

```sh
npm run preview:file
```

Le fichier généré est `docs/preview.html`.

## Développement

Node.js 22.12 ou une version plus récente est nécessaire.

```sh
npm ci
npm run dev
```

## Vérification

```sh
npx playwright install chromium
npm run check
```

Les tests couvrent les filtres, les fiches projet, l’historique du navigateur, le changement de langue, les anciennes adresses, l’accessibilité et les débordements horizontaux de 320 à 1920 pixels.

## Compilation

```sh
npm run build
npm run preview
```

Le dossier `dist` peut être publié sur un hébergement statique. La base relative permet un hébergement à la racine ou dans un sous-dossier. `VITE_BASE_PATH` permet de choisir explicitement une autre base lors de la compilation.

Les anciennes adresses HTML sont générées comme redirections vers les sections ou les fiches correspondantes.

## Contenus

`src/data.js` regroupe les sept projets, les quatorze compétences, les liens et les traductions. Les logos d’origine sont conservés dans `img`. Les illustrations des projets sont réalisées en CSS et SVG dans `src/components/ProjectArt.jsx`. GraphViewer utilise l’image fournie dans `img/graphviewer.png`, affichée intégralement dans sa fiche et recadrée dans la miniature. Le visuel de Maze Game reprend la zone de jeu de la capture fournie, sans son texte de présentation.

Les cinq projets initiaux sont complétés par GraphViewer et Maze Game, classés dans le filtre Algorithmique. Ces deux projets n’ont plus de dépôt source accessible ; leurs fiches le signalent sans lien vers un dépôt tiers. LinkedIn est accessible depuis la navigation et la rubrique contact. La présentation personnelle est rédigée à partir des réalisations décrites ; le texte de démonstration du studio Grounded et les images « TEMP IMG » ont été retirés.

Deux incohérences existent dans la source initiale : la présentation de Mini RSA cite Java tandis que sa fiche cite Python ; la fiche BananaW liste C++ alors que son texte décrit HTML et CSS. Les technologies citées ont été conservées sans ajouter d’affirmation sur leur rôle exact.

Les textes d’origine en anglais sont repris pour les résumés et les apprentissages des cinq projets initiaux. Les deux nouvelles fiches sont disponibles dans les deux langues.

La version HTML initiale reste accessible dans l’historique Git, au commit `96a9844c9b74b84f42b52cb797b3d00b94921c41`.
