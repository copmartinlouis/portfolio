import carbonLogo from '../img/carbon_logo.png';
import bananaLogo from '../img/bananaw_logo.PNG';
import javaLogo from '../img/logoSkills/java_logo.png';
import cSharpLogo from '../img/logoSkills/cSharp_logo.png';
import cLogo from '../img/logoSkills/c_logo.png';
import phpLogo from '../img/logoSkills/php_logo.png';
import pythonLogo from '../img/logoSkills/python_logo.png';
import mysqlLogo from '../img/logoSkills/mysql_logo.png';
import htmlLogo from '../img/logoSkills/html_logo.png';
import cssLogo from '../img/logoSkills/css_logo.png';
import jsLogo from '../img/logoSkills/js_logo.png';
import symfonyLogo from '../img/logoSkills/symfony_logo.png';
import gitlabLogo from '../img/logo_gitlab.png';

export const links = {
  github: 'https://github.com/copmartinlouis',
  gitlab: 'https://gitlab-ce.iut.u-bordeaux.fr/lcopmartin',
};

export const projects = [
  {
    id: 'robosoccer',
    number: '01',
    category: 'web',
    type: { fr: 'Web · Full-stack', en: 'Web · Full-stack' },
    title: { fr: 'RoboSoccer', en: 'RoboSoccer' },
    subtitle: {
      fr: 'Le tournoi, de A à Z.',
      en: 'The tournament, from A to Z.',
    },
    technologies: ['PHP', 'HTML', 'Tailwind CSS', 'SQL'],
    url: 'https://gitlab-ce.iut.u-bordeaux.fr/matjay/saes3.01',
    summary: {
      fr: 'Une plateforme de gestion de tournois : inscription des équipes, planification des matchs et suivi des scores en temps réel.',
      en: 'A tournament management platform for organizing RoboSoccer competitions, featuring team registration, match scheduling, and real-time score tracking.',
    },
    description: {
      fr: 'Une application web pour organiser les tournois de RoboSoccer. Elle centralise l’inscription des équipes, le calendrier des matchs et le suivi des résultats, avec une interface pensée pour les administrateurs et les participants.',
      en: 'A web platform for managing RoboSoccer tournaments, including features such as team registration, match scheduling, and result tracking, designed for administrators and participants.',
    },
    learning: {
      fr: 'Ce projet m’a permis de travailler le développement full-stack, la conception de bases de données et les interfaces responsives. J’ai également abordé l’authentification, les conventions de code et le déploiement, en portant attention à l’utilisabilité, la maintenabilité et la montée en charge. Le travail en équipe avec la méthode Scrum a renforcé la coordination et l’entraide.',
      en: 'This project focused on building a web platform for managing RoboSoccer tournaments, including features such as team registration, match scheduling, and result tracking. Working on this project helped me improve my skills in full-stack web development, database design, and responsive UI implementation. I also gained experience in managing user authentication, applying coding standards, and deploying applications. The project challenged me to think critically about usability, maintainability, and scalability, all while ensuring a seamless experience for both administrators and participants. I also learned how to apply in a project the agile method "SCRUM", which helped all the team work way more efficiently and pushed us to help eachother.',
    },
    features: {
      fr: [
        'Inscription des équipes',
        'Planification des matchs',
        'Suivi des résultats',
        'Authentification et méthode Scrum',
      ],
      en: [
        'Team registration',
        'Match scheduling',
        'Result tracking',
        'Authentication and Scrum',
      ],
    },
  },
  {
    id: 'carbon',
    number: '02',
    category: 'data',
    type: { fr: 'Données · Application', en: 'Data · Application' },
    title: { fr: 'Carbon', en: 'Carbon' },
    subtitle: { fr: 'Faire parler les données.', en: 'Let the data speak.' },
    logo: carbonLogo,
    technologies: ['C#', 'Python', 'SQL'],
    url: 'https://gitlab-ce.iut.u-bordeaux.fr/fdebailleul/sae-s2-04_sae-s2-05_projet_developpement_logiciel',
    summary: {
      fr: 'Une application de visualisation de données avec cartes interactives, graphiques, filtres dynamiques et régression linéaire.',
      en: 'Carbon is a data visualization tool offering interactive world maps, versatile plots, and linear regression analysis. It supports geographic focus, multi-data comparisons, and dynamic filtering, enabling users to explore global trends and insights efficiently.',
    },
    description: {
      fr: 'Carbon permet d’explorer des données à travers des cartes du monde interactives et différents graphiques. Le filtrage dynamique, le ciblage géographique et la comparaison de plusieurs jeux de données facilitent l’analyse des tendances. Une passerelle Python relie la base SQL à l’application C#.',
      en: 'Carbon is a data visualization application with interactive world maps, versatile plots, linear regression analysis, geographic focus, multi-data comparisons, and dynamic filtering. A Python bridge connects the SQL database to the C# application.',
    },
    learning: {
      fr: 'J’ai approfondi la programmation en C#, la liaison entre SQL et C# avec Python et la gestion de bases de données volumineuses. Le projet, réalisé à cinq, a aussi renforcé ma capacité à répartir les tâches et à communiquer tout au long du développement.',
      en: 'This project taught me valuable skills in informatics, including working with C# programming, linking SQL databases to C# applications using Python, and handling large databases efficiently. It also enhanced my ability to collaborate within a group of five by improving task delegation and communication throughout the project.',
    },
    features: {
      fr: [
        'Cartes du monde interactives',
        'Comparaison et filtrage des données',
        'Analyse par régression linéaire',
        'Passerelle SQL / Python / C#',
      ],
      en: [
        'Interactive world maps',
        'Data comparison and filtering',
        'Linear regression analysis',
        'SQL / Python / C# bridge',
      ],
    },
  },
  {
    id: 'towa',
    number: '03',
    category: 'ai',
    type: { fr: 'IA · Jeu de stratégie', en: 'AI · Strategy game' },
    title: { fr: 'Towa AI', en: 'Towa AI' },
    subtitle: { fr: 'Penser le prochain coup.', en: 'Think one move ahead.' },
    technologies: ['Python', 'Java'],
    url: 'https://gitlab-ce.iut.u-bordeaux.fr/lcopmartin/towaia',
    summary: {
      fr: 'Une intelligence artificielle conçue en binôme pour jouer à Towa et affronter les IA des autres étudiants.',
      en: "In a group of two we developed a board game named Towa. And in this project, we created an AI to play on this board game and win against other student's AIs.",
    },
    description: {
      fr: 'Après le développement du jeu de plateau Towa en binôme, nous avons conçu une IA capable d’y jouer et de prendre des décisions stratégiques. L’objectif était de la confronter aux intelligences artificielles développées par les autres étudiants.',
      en: 'After developing the Towa board game in a team of two, we built an AI capable of playing it and making strategic decisions, with the goal of competing against other students’ AIs.',
    },
    learning: {
      fr: 'J’ai appris à concevoir des algorithmes de décision, à optimiser leurs performances et à déboguer des systèmes complexes. Le binôme m’a appris à répartir les tâches et à réunir nos solutions dans un ensemble cohérent. Ce projet m’a également initié à la théorie des jeux et à la programmation du comportement d’une IA.',
      en: "This project helped me develop advanced problem-solving skills while creating an AI for the board game Towa. I learned how to design algorithms capable of making strategic decisions, optimize the AI's performance to compete against others, and debug complex systems. Working in a group of two enhanced my ability to collaborate, divide tasks efficiently, and merge solutions into a cohesive system. This experience also gave me insight into game theory and AI behavior programming.",
    },
    features: {
      fr: [
        'Jeu de plateau Towa',
        'Décisions stratégiques',
        'Optimisation des algorithmes',
        'Développement en binôme',
      ],
      en: [
        'Towa board game',
        'Strategic decision-making',
        'Algorithm optimization',
        'Development in a team of two',
      ],
    },
  },
  {
    id: 'rsa',
    number: '04',
    category: 'security',
    type: { fr: 'Sécurité · Cryptographie', en: 'Security · Cryptography' },
    title: { fr: 'Mini RSA', en: 'Mini RSA' },
    subtitle: {
      fr: 'Échanger en toute confiance.',
      en: 'Communicate with confidence.',
    },
    technologies: ['Python', 'Java', 'RSA'],
    url: 'https://gitlab-ce.iut.u-bordeaux.fr/ivbonnet/sae-minirsa',
    summary: {
      fr: 'Une messagerie sécurisée intégrant le chiffrement RSA, les signatures numériques et la gestion des certificats.',
      en: 'Development of a secure messaging application in Java, featuring RSA encryption, digital signatures, certificate management, and real-time encrypted communication between multiple users.',
    },
    description: {
      fr: 'Une application de messagerie permettant des échanges chiffrés en temps réel entre plusieurs utilisateurs. Elle associe le chiffrement RSA, les signatures numériques et la gestion des certificats pour sécuriser les communications.',
      en: 'A secure messaging application featuring RSA encryption, digital signatures, certificate management, and real-time encrypted communication between multiple users.',
    },
    learning: {
      fr: 'J’ai approfondi les algorithmes de chiffrement, la gestion sécurisée des clés et l’implémentation de protocoles cryptographiques. Le projet m’a également permis d’écrire du Python efficace et sécurisé et de concevoir puis tester un système de communication chiffré.',
      en: 'This project involved developing a secure messaging application featuring RSA encryption, digital signatures, certificate management, and real-time encrypted communication between multiple users. Through this experience, I gained a deep understanding of encryption algorithms, the importance of secure key management, and the implementation of cryptographic protocols. Additionally, this project enhanced my ability to write efficient, secure Python code and provided hands-on experience in designing and testing secure communication systems.',
    },
    features: {
      fr: [
        'Chiffrement RSA',
        'Signatures numériques',
        'Gestion des clés et des certificats',
        'Communication chiffrée en temps réel',
      ],
      en: [
        'RSA encryption',
        'Digital signatures',
        'Key and certificate management',
        'Real-time encrypted communication',
      ],
    },
  },
  {
    id: 'bananaw',
    number: '05',
    category: 'web',
    type: { fr: 'Web · Premier projet', en: 'Web · First project' },
    title: { fr: 'BananaW', en: 'BananaW' },
    subtitle: { fr: 'Là où tout a commencé.', en: 'Where it all started.' },
    logo: bananaLogo,
    technologies: ['HTML', 'CSS', 'C++'],
    url: 'https://gitlab-ce.iut.u-bordeaux.fr/lcopmartin/site-bananaw',
    summary: {
      fr: 'Un petit site fictif et humoristique, réalisé en HTML et CSS. Mon premier terrain d’expérimentation en développement web.',
      en: 'In html/CSS I developed a small fictional and humoristic website. This was one of my first projects and I like to show it to show from where I started compared to where I am now.',
    },
    description: {
      fr: 'BananaW est un site fictif et humoristique qui marque mes premiers pas dans le développement web. Il m’a permis d’expérimenter la mise en page et de traduire mes idées visuelles en HTML et CSS.',
      en: 'BananaW is a small fictional and humorous website that marks my first steps in web development and my early experiments with layouts and design.',
    },
    learning: {
      fr: 'Ce premier projet m’a donné les bases du HTML et du CSS. Il m’a appris à aborder les difficultés avec créativité et à mettre en œuvre des idées visuelles. Je le conserve pour montrer mon évolution vers des interfaces plus élaborées et responsives.',
      en: 'This project was my first experience in web development, where I created a small fictional and humoristic website. It gave me a strong foundation in HTML and CSS, allowing me to experiment with layouts and design. By reflecting on this project, I can see how far I’ve come in my skills, from understanding basic principles to creating more sophisticated and responsive designs. It also taught me how to creatively approach challenges and implement visual ideas effectively.',
    },
    features: {
      fr: [
        'Site fictif et humoristique',
        'Fondations HTML et CSS',
        'Expérimentation de mises en page',
        'Premiers pas dans le développement web',
      ],
      en: [
        'Fictional, humorous website',
        'HTML and CSS foundations',
        'Layout experiments',
        'First steps in web development',
      ],
    },
  },
];

export const skillGroups = [
  {
    name: { fr: 'Langages & données', en: 'Languages & data' },
    number: '01',
    items: [
      { name: 'Java', logo: javaLogo },
      { name: 'C#', logo: cSharpLogo },
      { name: 'C', logo: cLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    name: { fr: 'Développement web', en: 'Web development' },
    number: '02',
    items: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'Symfony', logo: symfonyLogo },
    ],
  },
  {
    name: { fr: 'Outils & méthodes', en: 'Tools & methods' },
    number: '03',
    items: [
      { name: 'GitLab', logo: gitlabLogo },
      { name: 'Docker', icon: 'container' },
      { name: 'UML', icon: 'diagram' },
      { name: 'Bash', icon: 'terminal' },
    ],
  },
];

export const copy = {
  fr: {
    skip: 'Aller au contenu',
    title: 'Louis Copmartin — Développeur logiciel',
    nav: ['Projets', 'À propos', 'Compétences'],
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Switch to English',
    portfolio: 'Portfolio personnel',
    role: 'Développeur logiciel',
    hero: 'Du web aux données, je construis des applications qui donnent du sens aux idées.',
    explore: 'Découvrir mes projets',
    scroll: 'Explorer le portfolio',
    fields: 'Web · Données · Intelligence artificielle',
    sectionProjects: 'Une sélection de projets',
    projectsTitle: 'Des idées au concret.',
    projectsIntro:
      'Cinq projets, différentes façons de résoudre un problème. Et toujours la même envie : comprendre, construire, progresser.',
    filters: {
      all: 'Tous',
      web: 'Web',
      data: 'Données',
      ai: 'IA',
      security: 'Sécurité',
    },
    filterLabel: 'Filtrer les projets',
    projectCount: 'projets',
    projectCountSingle: 'projet',
    viewProject: 'Découvrir le projet',
    aboutLabel: 'À propos',
    aboutTitle: 'Apprendre en faisant.',
    aboutLead:
      'De ma première page HTML à une plateforme de gestion de tournois, mon parcours se construit projet après projet.',
    aboutBody:
      'Mes réalisations explorent le développement web, la visualisation de données, la cryptographie et l’intelligence artificielle. Elles m’ont appris à relier les technologies, à travailler en équipe et à passer d’un problème à une solution utilisable.',
    approaches: [
      {
        title: 'Comprendre',
        text: 'Analyser le besoin et poser les bonnes fondations.',
      },
      {
        title: 'Construire',
        text: 'Relier les interfaces, la logique et les données.',
      },
      {
        title: 'Collaborer',
        text: 'Partager les tâches, communiquer et avancer ensemble.',
      },
    ],
    skillsLabel: 'Compétences',
    skillsTitle: 'Les outils derrière les idées.',
    skillsIntro:
      'Un socle technique développé et mis en pratique au fil de mes projets.',
    contactLabel: 'Et la suite ?',
    contactTitle: 'Continuons\nla conversation.',
    contactBody: 'Retrouvez mes projets et mon code sur GitHub et GitLab.',
    githubCta: 'Me retrouver sur GitHub',
    footerRole: 'Développement logiciel',
    backTop: 'Retour en haut',
    closeProject: 'Fermer le projet',
    projectOverview: 'Le projet',
    projectFeatures: 'Ce que l’application propose',
    projectLearning: 'Ce que j’en retiens',
    technologies: 'Technologies',
    sourceCode: 'Voir le code sur GitLab',
    previousProject: 'Projet précédent',
    nextProject: 'Projet suivant',
    illustration: 'Illustration du projet',
    illustrationLabels: ['Équipes', 'Matchs', 'Résultats'],
    visualization: 'Visualiser. Comparer. Comprendre.',
  },
  en: {
    skip: 'Skip to content',
    title: 'Louis Copmartin — Software developer',
    nav: ['Projects', 'About', 'Skills'],
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Passer en français',
    portfolio: 'Personal portfolio',
    role: 'Software developer',
    hero: 'From the web to data, I build applications that turn ideas into something useful.',
    explore: 'Explore my projects',
    scroll: 'Explore the portfolio',
    fields: 'Web · Data · Artificial intelligence',
    sectionProjects: 'Selected work',
    projectsTitle: 'Ideas into reality.',
    projectsIntro:
      'Five projects, different ways to solve a problem. With the same motivation: understand, build, and grow.',
    filters: {
      all: 'All',
      web: 'Web',
      data: 'Data',
      ai: 'AI',
      security: 'Security',
    },
    filterLabel: 'Filter projects',
    projectCount: 'projects',
    projectCountSingle: 'project',
    viewProject: 'Explore the project',
    aboutLabel: 'About',
    aboutTitle: 'Learning by building.',
    aboutLead:
      'From my first HTML page to a tournament management platform, my journey takes shape one project at a time.',
    aboutBody:
      'My work explores web development, data visualization, cryptography, and artificial intelligence. These projects have taught me to connect technologies, work with a team, and turn a problem into a usable solution.',
    approaches: [
      {
        title: 'Understand',
        text: 'Analyze the need and establish solid foundations.',
      },
      { title: 'Build', text: 'Connect interfaces, logic, and data.' },
      {
        title: 'Collaborate',
        text: 'Share tasks, communicate, and move forward together.',
      },
    ],
    skillsLabel: 'Skills',
    skillsTitle: 'The tools behind the ideas.',
    skillsIntro:
      'A technical foundation developed and put into practice across my projects.',
    contactLabel: 'What’s next?',
    contactTitle: 'Let’s keep\nthe conversation going.',
    contactBody: 'Find my projects and code on GitHub and GitLab.',
    githubCta: 'Find me on GitHub',
    footerRole: 'Software development',
    backTop: 'Back to top',
    closeProject: 'Close project',
    projectOverview: 'The project',
    projectFeatures: 'What the application offers',
    projectLearning: 'What I learned',
    technologies: 'Technologies',
    sourceCode: 'View the code on GitLab',
    previousProject: 'Previous project',
    nextProject: 'Next project',
    illustration: 'Project illustration',
    illustrationLabels: ['Teams', 'Matches', 'Results'],
    visualization: 'Visualize. Compare. Understand.',
  },
};
