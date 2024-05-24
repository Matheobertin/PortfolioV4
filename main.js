// Dictionnaire contenant les informations des projets
const projets = {
    1: {
        title: "Création d'un court métrage avec Blender",
        description: "Dans le cadre de notre première année en école d'ingénieurs, nous avons entrepris un projet de création de court métrage en utilisant le logiciel Blender. Ce projet nous a permis d'explorer et d'appliquer divers concepts de modélisation 3D, d'animation et de rendu, tout en développant nos compétences en travail d'équipe et en gestion de projet.",
        conclusion: "Ce projet nous a permis d'acquérir une expérience précieuse dans l'utilisation de Blender pour la création de contenus animés en 3D. Nous avons également amélioré nos compétences en collaboration, en planification de projet et en résolution de problèmes. En fin de compte, nous sommes fiers du résultat final et des compétences que nous avons développées tout au long de ce processus. ",
        lien: "https://youtu.be/_Sw_4bQjL5I",
        img: "intro.gif"
    },
    2: {
        title: "Filmothèque (mélange de C et HTML)",
        description: "Dans le cadre de notre première année en école d'ingénieurs, nous avons réalisé un projet de filmotèque, combinant les langages C et HTML. Ce projet avait pour but de mettre en pratique nos connaissances en programmation en utilisant le langage C pour la logique applicative et HTML pour l'interface utilisateur, afin de créer une application permettant de gérer une collection de films.",
        conclusion: "Ce projet nous a permis de consolider nos compétences en programmation en combinant les langages C et HTML pour créer une application fonctionnelle. Nous avons appris à travailler sur des projets interdisciplinaires et à intégrer différentes technologies pour atteindre un objectif commun. En fin de compte, ce projet nous a fourni une expérience précieuse dans le développement de logiciels et nous a préparés à relever des défis similaires dans notre parcours académique et professionnel",
        lien: "https://github.com/Matheobertin/Filmoth-que",
        img: "filmotheque.png"
    },
    3: {
        title: "Jeu de la vie (C)",
        description: "L'objectif est de créer une représentation informatique de ce système en mettant en place des règles simples d'évolution. A chaque génération, une cellule vivante survit si elle a 2 ou 3 voisins vivants, sinon elle meurt, et une cellule morte devient vivante si elle a exactement 3 voisins vivants. Le projet implique la création d'une grille initiale, l'affichage visuel de son évolution, et l'interaction avec l'utilisateur pour placer des cellules ou observer le jeu en cours.",
        conclusion: "Ce projet nous a permis de consolider nos compétences en programmation en C pour créer un jeu fonctionnelle. En fin de compte, ce projet nous a fourni une expérience précieuse dans le développement de jeu et de programme et nous a préparés à relever des défis similaires dans notre parcours académique et professionnel",
        lien: "https://github.com/Matheobertin/",
        img: "jeudelavie.gif"
    },
    4: {
        title: "Plateformer (QT)",
        description: "L'objectif est de créer un jeu de plate-forme en utilisant le framework Qt, en mettant en œuvre des éléments classiques tels que des plateformes mobiles, des ennemis, et des objets collectables. Le joueur doit naviguer à travers différents niveaux, en sautant et en évitant les obstacles pour atteindre l'objectif final. Le projet implique la création de niveaux variés, une gestion fluide des mouvements du personnage, et une interface utilisateur intuitive pour une expérience de jeu agréable.",
        conclusion: "Ce projet nous a permis de renforcer nos compétences en programmation avec Qt pour développer un jeu de plate-forme fonctionnel. En fin de compte, ce projet nous a offert une expérience précieuse dans le développement de jeux et de logiciels, et nous a préparés à relever des défis similaires dans notre parcours académique et professionnel.",
        lien: "https://github.com/Matheobertin/",
        img: "jeuQT.gif"
    },
    // Ajoutez d'autres projets ici si nécessaire
};

// Fonction pour afficher les informations d'un projet donné
function afficherProjet(projetId) {
    const projet = projets[projetId];
    if (projet) {
        document.getElementById('projet_info').innerHTML = `<h2>${projet.title}</h2><p>${projet.description}</p><p>${projet.conclusion}</p><img src="${projet.img}"><a href="${projet.lien}"target="_blank">Redirection</a>`;

    } else {
        document.getElementById('projet_info').innerHTML = "<p>Le projet sélectionné n'existe pas.</p>";
    }
}

// Afficher le premier projet au chargement de la page
let projetActuel = 1;
afficherProjet(projetActuel);

// Écouter les clics sur le bouton "next"
document.getElementById('next').addEventListener('click', function() {
    projetActuel++;
    if (projetActuel > Object.keys(projets).length) {
        projetActuel = 1; // Revenir au premier projet lorsque nous atteignons la fin
    }
    afficherProjet(projetActuel);
});

// Écouter les clics sur le bouton "prev"
document.getElementById('prev').addEventListener('click', function() {
    projetActuel--;
    if (projetActuel < 1) {
        projetActuel = Object.keys(projets).length; // Revenir au dernier projet lorsque nous atteignons le début
    }
    afficherProjet(projetActuel);
});












document.addEventListener('DOMContentLoaded', function () {
    const helloWorldElement = document.getElementById('helloWorld');
    const text = '> Hello, World!';

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', function () {
        // Redirigez vers votre page HTML
        window.location.href = 'index.html';
    });

    function displayText(index) {
        if (index < text.length) {
            helloWorldElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                displayText(index);
            }, 200); // ajustez la vitesse d'affichage ici
        } else {
            setTimeout(function () {
                helloWorldElement.innerHTML = '';
                displayText(0);
            }, 1000); // temps d'attente avant de recommencer
        }
    }

    displayText(0);
});

document.addEventListener("DOMContentLoaded", function() {
    const experiences = document.querySelectorAll(".experience-item");
    const modal = document.getElementById("experienceModal");
    const modalContent = document.getElementById("modalContent");

    // Structure de données pour stocker les informations de chaque expérience
    const experienceData = {
        1: {
            title: "AGENT POLYVALENT",
            text: "Commune de Lohéac, 2021<br>" +
                "Contractuel Vacataire en tant qu'agent d'entretien des espaces verts",
            imageUrl: "loheac.jpg"
        },
        2: {
            title: "PROJET ACTION SERVICE",
            text: "Lycée Marcel Callo de Redon, 2019 - 2022<br>" +
                "Attestation d'accomplissement Projet Action Service (Tutorat en Seconde, Première, Terminale et participation à l'organisation et à la gestion du foyer des élèves)",
            imageUrl: "marcelcallo.png"
        },
        3: {
            title: "TRAVAIL SAISONNIER",
            text: "Base Centrale INTERMARCHÉ LAI, 2022 - EN COURS<br>" +
                "Agent technique et d'entretien",
            imageUrl: "itm.jpg"
        },
        4: {
            title: "STAGE ASSOCIATIF",
            text: "Cinéma l’Alliance, 2023<br>" +
                "Bénévole à tous les postes",
            imageUrl: "cinema.png"
        },
        5: {
            title: "PROFESSEUR PARTICULIER",
            text: "Enseignement des mathématiques, 2022 - EN COURS<br>" +
                "Enseignement à des collégiens et lycéens en vue de leurs examens",
            imageUrl: "cours.jpg"
        }
        // Ajoutez d'autres expériences avec des identifiants différents
    };

    experiences.forEach((experience) => {
        experience.addEventListener("click", function() {
            // Afficher la modal avec les informations de l'expérience
            const experienceId = experience.getAttribute("data-id");
            const data = experienceData[experienceId];
            event.stopPropagation();
            showModal(data);
        });
    });

    document.body.addEventListener("click", function(event) {
        // Fermer la modal lorsqu'on clique en dehors du contenu
        var modalStyle = window.getComputedStyle(modal);
        if (modalStyle.display === "block") {
            modal.style.display = "none";
        }
    });
    function showModal(data) {
        // Afficher les informations de l'expérience dans la modal
        modalContent.innerHTML = `<div>
    <h2>${data.title}</h2>
    <p>${data.text}</p></div>
    <img class="modal-content" src="${data.imageUrl}" alt="">
  `;
        modal.style.display = "block";
    }
});

import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js'; // Assurez-vous que le chemin est correct

// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('zoneThreeJS').appendChild(renderer.domElement);

document.getElementById('zoneThreeJS').style.display = 'none';
document.getElementById('textOverlay').style.display = 'none';
document.getElementById('retourBtn').style.display = 'none';

document.getElementById('boutonJouer').addEventListener('click', () => {
    document.getElementById('zoneThreeJS').style.display = 'block';
    document.getElementById('retourBtn').style.display = 'block';
    animate();

    // Récupérer la largeur et la hauteur de l'écran
    var largeurEcran = window.innerWidth;
    var hauteurEcran = window.innerHeight;
    if (largeurEcran < 400 || hauteurEcran < 500) {
        joystick.style.display = "block";
    }


    document.getElementById('boutonJouer').style.display = 'none';

    // Cachez les autres éléments
    document.getElementById('non_visualisation').style.display = 'none';
    document.getElementById('visualisation').style.display = 'none';
    document.getElementById('boutonJouer').style.display = 'none';
    document.getElementById('textOverlay').style.display = 'none';
});

const loader1 = new GLTFLoader();
let mixer;
let action;
// Durée totale de l'animation (en secondes)
let animationDuration;
let scene1;
// Chargez le modèle .glTF
loader1.load('demarage.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire
    scene1 = gltf.scene;
    scene1.scale.set(10, 10, 10);
    scene1.position.set(0, 0, 0);
    animationDuration = gltf.animations[0].duration;
    // Ajoutez le modèle à la scène
    scene.add(scene1);

    // Si vous avez des animations dans le fichier .glTF, vous pouvez également les gérer ici
    mixer = new THREE.AnimationMixer(scene1);
    action = mixer.clipAction(gltf.animations[0]);
    action.setLoop(THREE.LoopOnce); // Définissez la boucle pour jouer une seule fois
    action.clampWhenFinished = true; // Empêchez l'animation de retourner à son état initial
    action.play();
});


// Création de la lumière principale (soleil)
const pointLight = new THREE.PointLight(0xffffff, 40, 20);
pointLight.position.set(3.5, 4, 3.5); // Position de la lumière

scene.add(pointLight);

// Création de la lumière principale (soleil)
const pointLight1 = new THREE.PointLight(0xffffff, 40, 20);
pointLight1.position.set(-3.5, 4, 3.5); // Position de la lumière

scene.add(pointLight1);

// Création de la lumière principale (soleil)
const pointLight2 = new THREE.PointLight(0xffffff, 40, 20);
pointLight2.position.set(0, 4, -3.5); // Position de la lumière

scene.add(pointLight2);

const sceneWidth = 10;
const sceneHeight = 10;

const loader = new GLTFLoader();
loader.load('personnage.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    character.add(gltf.scene);

});

// Création du personnage
const characterGeometry = new THREE.BoxGeometry(0, 0, 0);
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
character.position.set(0, -5, 0.86); // Position initiale du personnage
character.scale.set(1,1,1);
character.castShadow = true; // Activer la projection d'ombres du personnage

// Ajoutez le personnage au groupe
scene.add(character);

const loader2 = new GLTFLoader();
loader2.load('tableau.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    tableau.add(gltf.scene);

});

// Création du tableau
const tableauGeometry = new THREE.BoxGeometry(0, 0, 0);
const tableauMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const tableau = new THREE.Mesh(tableauGeometry, tableauMaterial);
tableau.position.set(0, 0, 0); // Position initiale du personnage
tableau.scale.set(1,1,1);
tableau.castShadow = true; // Activer la projection d'ombres du personnage

// Ajoutez le personnage au groupe
scene.add(tableau);

const loader3 = new GLTFLoader();
loader3.load('bureau.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    bureau.add(gltf.scene);

});

// Création du bureau
const bureauGeometry = new THREE.BoxGeometry(0, 0, 0);
const bureauMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const bureau = new THREE.Mesh(bureauGeometry, bureauMaterial);
bureau.position.set(0, 0, 0); // Position initiale du personnage
bureau.scale.set(1,1,1);
bureau.castShadow = true; // Activer la projection d'ombres du personnage
scene.add(bureau);

const loader7 = new GLTFLoader();
loader7.load('armoire.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    armoire.add(gltf.scene);

});

// Création de l'armoire
const armoireGeometry = new THREE.BoxGeometry(0, 0, 0);
const armoireMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const armoire = new THREE.Mesh(armoireGeometry, armoireMaterial);
armoire.position.set(0, 0, 0); // Position initiale du personnage
armoire.scale.set(1,1,1);
armoire.castShadow = true; // Activer la projection d'ombres du personnage
scene.add(armoire);


const loader4 = new GLTFLoader();
loader4.load('livre.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    livre.add(gltf.scene);

});

// Création du bureau
const livreGeometry = new THREE.BoxGeometry(0, 0, 0);
const livreMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const livre = new THREE.Mesh(livreGeometry, livreMaterial);
livre.position.set(0, 0, 0); // Position initiale du personnage
livre.scale.set(1,1,1);
livre.castShadow = true; // Activer la projection d'ombres du personnage
bureau.add(livre);

const loader5 = new GLTFLoader();
loader5.load('chariot.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    chariot.add(gltf.scene);

});

// Création du bureau
const chariotGeometry = new THREE.BoxGeometry(0, 0, 0);
const chariotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const chariot = new THREE.Mesh(chariotGeometry, chariotMaterial);
chariot.position.set(0, 0, 0); // Position initiale du personnage
chariot.scale.set(1,1,1);
chariot.castShadow = true; // Activer la projection d'ombres du personnage
bureau.add(chariot);

const loader6 = new GLTFLoader();
loader6.load('fleur.glb', (gltf) => {
    // Vous pouvez accéder au modèle chargé (gltf.scene) et apporter des modifications si nécessaire

    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.castShadow = true; // Activer la projection d'ombres du personnage

    // Ajoutez le modèle à la scène avec le nom "character"
    fleur.add(gltf.scene);

});

// Création du bureau
const fleurGeometry = new THREE.BoxGeometry(0, 0, 0);
const fleurMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const fleur = new THREE.Mesh(fleurGeometry, fleurMaterial);
fleur.position.set(0, 0, 0); // Position initiale du personnage
fleur.scale.set(1,1,1);
fleur.castShadow = true; // Activer la projection d'ombres du personnage
bureau.add(fleur);

let tableauClicked = false;
let bureauClicked = false;
let armoireClicked = false;
let livreClicked = false;
let chariotClicked = false;
let fleurClicked = false;


renderer.domElement.addEventListener('click', (event) => {

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    // Coordonnées du clic de souris
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Configurer le rayon pour le lancer depuis la caméra
    raycaster.setFromCamera(mouse, camera);

    // Trouver tous les objets intersectés par le rayon
    const intersects_tableau = raycaster.intersectObjects([tableau], true);
    const intersects_bureau = raycaster.intersectObjects([bureau], true);
    const intersects_armoire = raycaster.intersectObjects([armoire], true);

    const textOverlay = document.getElementById("textOverlay");

    textOverlay.style.display = "none";
    if (tableauClicked) {
        tableauClicked = false;
    }
    if (armoireClicked) {
        armoireClicked = false;
    }if (bureauClicked) {
        const intersects_livre = raycaster.intersectObjects([livre], true);
        const intersects_chariot = raycaster.intersectObjects([chariot], true);
        const intersects_fleur = raycaster.intersectObjects([fleur], true);

        textOverlay.style.display = "none";
        bureauClicked = false;
        if (livreClicked){
            livreClicked = false;
            bureauClicked = true;
        }
        if (chariotClicked){
            chariotClicked = false;
            bureauClicked = true;
        }
        if (fleurClicked){
            fleurClicked = false;
            bureauClicked = true;
        }
        else{
            if(intersects_livre.length > 0){
                textOverlay.innerHTML = "PROFESSEUR PARTICULIER<br>";
                textOverlay.innerHTML += "Enseignement des mathématiques, 2022 - EN COURS<br>";
                textOverlay.innerHTML += "Enseignement à des collégiens et lycéens en vue de leurs examens";
                textOverlay.style.top = window.innerHeight/2 - 100+ "px";
                textOverlay.style.left = window.innerWidth/2 - 100 + "px";
                livreClicked = true;
                textOverlay.style.display = "block";
                bureauClicked = true;
            }
            if(intersects_chariot.length > 0){
                textOverlay.innerHTML = "TRAVAIL SAISONNIER<br>";
                textOverlay.innerHTML += "Base Centrale INTERMARCHÉ LAI, 2022 - EN COURS<br>";
                textOverlay.innerHTML += "Agent technique et d'entretien";
                textOverlay.style.top = window.innerHeight/2 - 100+ "px";
                textOverlay.style.left = window.innerWidth/2 - 100 + "px";
                livreClicked = true;
                textOverlay.style.display = "block";
                bureauClicked = true;
            }
            if(intersects_fleur.length > 0){
                textOverlay.innerHTML = "AGENT POLYVALENT<br>";
                textOverlay.innerHTML += "Commune de Lohéac, 2021<br>";
                textOverlay.innerHTML += "Contractuel Vacataire en tant qu'agent d'entretien des espaces verts";
                textOverlay.style.top = window.innerHeight/2 - 100+ "px";
                textOverlay.style.left = window.innerWidth/2 - 100 + "px";
                livreClicked = true;
                textOverlay.style.display = "block";
                bureauClicked = true;
            }
        }
    }

    else {

        if (intersects_tableau.length > 0) {
            tableauClicked = true;
            camera.position.copy(tableau.position);
            camera.position.add(new THREE.Vector3(-4.3, 1.15, 3.45));
            camera.rotation.set(-Math.PI / 25, Math.PI / 7.25, Math.PI / 60);
        }
        if (intersects_bureau.length > 0) {
            camera.position.copy(bureau.position);
            camera.position.add(new THREE.Vector3(-3.225, 1.1, -1.4));
            camera.rotation.set(-Math.PI / 6, Math.PI / 7.5, Math.PI / 15);
            bureauClicked = true;
        }
        if (intersects_armoire.length > 0) {
            camera.position.copy(armoire.position);
            camera.position.add(new THREE.Vector3(-3.225, 1.1, -1.4));
            camera.rotation.set(-Math.PI / 6, Math.PI / 7.5, Math.PI / 15);
            armoireClicked = true;
        }
    }
});

let isMouseOverTableau = false;
let isMouseOverBureau = false;
let isMouseOverArmoire = false;
let isMouseOverLivre = false;
let isMouseOverChariot = false;
let isMouseOverFleur = false;

renderer.domElement.addEventListener('mousemove', (event) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    if(tableauClicked === false && bureauClicked === false && armoireClicked === false) {

        const intersects_tableau = raycaster.intersectObject(tableau, true);
        const intersects_bureau = raycaster.intersectObject(bureau, true);
        const intersects_armoire = raycaster.intersectObject(armoire, true);

        if (intersects_tableau.length > 0) {
            if (!isMouseOverTableau) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverTableau = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                tableau.position.y += 0.1;
            }
        } else {
            if (isMouseOverTableau) {
                // La souris a quitté la zone de l'objet
                isMouseOverTableau = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                tableau.position.y -= 0.1;
            }
        }

        if (intersects_bureau.length > 0) {
            if (!isMouseOverBureau) {
                isMouseOverBureau = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //bureau.scale.set(0.9, 0.9, 0.9);
                bureau.position.y += 0.1;
            }
        } else {
            if (isMouseOverBureau) {
                isMouseOverBureau = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //bureau.scale.set(1, 1, 1);
                bureau.position.y -= 0.1;
            }
        }

        if (intersects_armoire.length > 0) {
            if (!isMouseOverArmoire) {
                isMouseOverArmoire = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //bureau.scale.set(0.9, 0.9, 0.9);
                armoire.position.y += 0.1;
            }
        } else {
            if (isMouseOverArmoire) {
                isMouseOverArmoire = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //bureau.scale.set(1, 1, 1);
                armoire.position.y -= 0.1;
            }
        }
    }
    if(bureauClicked){
        const intersects_livre = raycaster.intersectObject(livre, true);
        const intersects_chariot = raycaster.intersectObject(chariot, true);
        const intersects_fleur = raycaster.intersectObject(fleur, true);

        if (intersects_livre.length > 0) {
            if (!isMouseOverLivre) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverLivre = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                livre.position.y += 0.05;
            }
        } else {
            if (isMouseOverLivre) {
                // La souris a quitté la zone de l'objet
                isMouseOverLivre = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                livre.position.y -= 0.05;
            }
        }
        if (intersects_chariot.length > 0) {
            if (!isMouseOverChariot) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverChariot = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                chariot.position.y += 0.05;
            }
        } else {
            if (isMouseOverChariot) {
                // La souris a quitté la zone de l'objet
                isMouseOverChariot = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                chariot.position.y -= 0.05;
            }
        }
        if (intersects_fleur.length > 0) {
            if (!isMouseOverFleur) {
                // La souris est entrée dans la zone de l'objet
                isMouseOverFleur = true;
                renderer.domElement.style.cursor = 'pointer'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(0.95, 0.95, 0.95);
                fleur.position.y += 0.05;
            }
        } else {
            if (isMouseOverFleur) {
                // La souris a quitté la zone de l'objet
                isMouseOverFleur = false;
                renderer.domElement.style.cursor = 'auto'; // Curseur de type "pointeur" (main)
                //tableau.scale.set(1, 1, 1);
                fleur.position.y -= 0.05;
            }
        }
    }
});


// Configuration de la caméra
camera.position.set(0, 2, 3);

// Créez un objet pour suivre l'état des touches
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    ' ': false, // Touche d'espace pour le saut
};

document.addEventListener('keydown', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (keys.hasOwnProperty(event.key)) {
        keys[event.key] = false;
    }
});

// Fonction pour mettre à jour les mouvements du personnage
const characterSpeed = 0.035; // Vitesse de déplacement
const characterPosition = character.position.clone();
let hauteurPersonnage = 0;
let indice = true;
// Fonction pour mettre à jour les mouvements du personnage
function updateCharacterMovement(delta) {
    // Vérifier si l'animation de démarrage n'est pas encore terminée
    let moveForward;
    let moveBackward;
    let moveLeft;
    let moveRight;
    moveForward = keys['ArrowUp'];
    moveBackward = keys['ArrowDown'];
    moveLeft = keys['ArrowLeft'];
    moveRight = keys['ArrowRight'];
    if (animationFinished && !bureauClicked && !tableauClicked) {
        moveForward = keys['ArrowUp'];
        moveBackward = keys['ArrowDown'];
        moveLeft = keys['ArrowLeft'];
        moveRight = keys['ArrowRight'];
    }

    let deltaX = 0;
    let deltaZ = 0;

    if (moveForward) {
        deltaZ -= characterSpeed;
    }
    if (moveBackward) {
        deltaZ += characterSpeed;
    }
    if (moveLeft) {
        deltaX -= characterSpeed;
    }
    if (moveRight) {
        deltaX += characterSpeed;
    }

    characterPosition.x += deltaX;
    characterPosition.z += deltaZ;

    character.rotation.y = Math.atan2(deltaX, deltaZ);

    // Vérification de la position du personnage par rapport aux limites de la scène
    if (characterPosition.x < -sceneWidth / 2 - 0.75) {
        characterPosition.x = -sceneWidth / 2 - 0.75;
    }
    if (characterPosition.x > sceneWidth / 2 + 0.75) {
        characterPosition.x = sceneWidth / 2 + 0.75;
    }
    if (characterPosition.z > sceneHeight / 2 + 0.75) {
        characterPosition.z = sceneHeight / 2 + 0.75;
    }
    if (characterPosition.z < -sceneHeight / 2 - 0.75) {
        characterPosition.z = -sceneHeight / 2 - 0.75;
    }

    // Vérification de la position du personnage par rapport à la plateforme du milieu de la scène
    const characterAboveTableau = (
        characterPosition.x >= -5.5 &&
        characterPosition.x <= -3.5 &&
        characterPosition.z >= 2 &&
        characterPosition.z <= 3.5
    );

    if (characterAboveTableau) {
        characterPosition.x -= deltaX;
        characterPosition.z -= deltaZ;
        if(isJoystickTouched){
            characterPosition.x -= lastJoystickDirection.x*characterSpeed;
            characterPosition.z -= lastJoystickDirection.y*characterSpeed;
            isJoystickTouched = false;
        }
    }

    const characterAboveBureau = (
        characterPosition.x >= -4.75 &&
        characterPosition.x <= -2.5 &&
        characterPosition.z >= -3 &&
        characterPosition.z <= -1.25
    );

    if (characterAboveBureau) {
        characterPosition.x -= deltaX;
        characterPosition.z -= deltaZ;
        if(isJoystickTouched){
            characterPosition.x -= lastJoystickDirection.x*characterSpeed;
            characterPosition.z -= lastJoystickDirection.y*characterSpeed;
            isJoystickTouched = false;
        }
    }

    const characterAboveArmoire = (
        characterPosition.x >= -1 &&
        characterPosition.x <= 1.8 &&
        characterPosition.z >= -4.8 &&
        characterPosition.z <= -3
    );

    if (characterAboveArmoire) {
        characterPosition.x -= deltaX;
        characterPosition.z -= deltaZ;
        if(isJoystickTouched){
            characterPosition.x -= lastJoystickDirection.x*characterSpeed;
            characterPosition.z -= lastJoystickDirection.y*characterSpeed;
            isJoystickTouched = false;
        }
    }

    // Vérification de la position du personnage par rapport à la plateforme du milieu de la scène
    const characterAbovePlatform = (
        characterPosition.x >= -0.85 &&
        characterPosition.x <= 0.85 &&
        characterPosition.z >= -0.85 &&
        characterPosition.z <= 0.85
    );

    if (characterAbovePlatform) {
        characterPosition.y =  hauteurPersonnage;
    } else {
        characterPosition.y = hauteurPersonnage - 0.2; // Hauteur par défaut

    }

    character.position.x = characterPosition.x;
    character.position.z = characterPosition.z;
    character.position.y = characterPosition.y;

    // Mise à jour du temps écoulé
    elapsedTime += delta;
    // Vérification si l'animation est terminée
    if (elapsedTime >= animationDuration && indice) {
        animationFinished = true;
        indice = false;
        const loader2 = new GLTFLoader();
        loader2.load('fin.glb', (nouvelleGltf) => {
            scene.remove(scene1);
            nouvelleGltf.scene.scale.set(10, 10, 10);
            nouvelleGltf.scene.position.set(0, 0, 0);
            // Ajoutez la nouvelle animation à la scène
            scene.add(nouvelleGltf.scene);
            // Configurez la nouvelle animation comme vous l'avez fait précédemment
            mixer = new THREE.AnimationMixer(nouvelleGltf.scene);
            action = mixer.clipAction(nouvelleGltf.animations[0]);
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.play();
        });
        // Réinitialiser le temps écoulé si nécessaire
        elapsedTime = 0;
    }
}

const joystick = document.getElementById('joystick');
const joystickManager = nipplejs.create({
    zone: joystick,
    mode: 'static',
    position: { top: "1.55em", left: '1.55em' },
    color: 'red',
});
joystick.style.display = "none";

// Store the last known direction and touch state of the joystick
let lastJoystickDirection = { x: 0, y: 0 };
let isJoystickTouched = false;

// Listen for joystick move events
const joystickInstance = joystickManager.get(0);
joystickInstance.on('start', () => {
    // Joystick is touched
    isJoystickTouched = true;
});

joystickInstance.on('end', () => {
    // Joystick is released
    isJoystickTouched = false;
    // Reset the last known direction when the joystick is released
    lastJoystickDirection = { x: 0, y: 0 };
});

joystickInstance.on('move', (event, data) => {
    // Update the last known direction when the joystick is moved
    lastJoystickDirection = { x: Math.cos(data.angle.radian), y: -Math.sin(data.angle.radian) };
});

// Function to move the character based on the last known joystick direction
function moveCharacterBasedOnJoystick() {
    if (isJoystickTouched) {
        const deltaX = lastJoystickDirection.x * characterSpeed;
        const deltaZ = lastJoystickDirection.y * characterSpeed;

        // Update the character's position
        characterPosition.x += deltaX;
        characterPosition.z += deltaZ;

        // Update the character's rotation to face the movement direction
        character.rotation.y = Math.atan2(deltaX, deltaZ);
    }
}

const clock = new THREE.Clock();
let animationFinished = false;
// Temps écoulé depuis le début de l'animation
let elapsedTime = 0;
// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    if(mixer){
        mixer.update(delta);
    }

    // Mettre à jour les mouvements du personnage
    updateCharacterMovement(delta);
    moveCharacterBasedOnJoystick();
    if(animationFinished){
        character.scale.set(1, 1, 1);
    }else{
        character.scale.set(10, 10, 10);
    }
    if(!tableauClicked && !bureauClicked && !livreClicked){
        camera.position.copy(character.position);
        camera.position.add(new THREE.Vector3(0, 1.5, 2.5));
        camera.lookAt(character.position);
    }

    renderer.render(scene, camera);
}

renderer.shadowMap.enabled = true; // Activer le rendu des ombres
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Type d'ombrage (peut être ajusté selon vos préférences)
