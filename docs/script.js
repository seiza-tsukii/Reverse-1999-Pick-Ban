// Liste des personnages avec images et tags
const characters = [
    { name: "Druvis III", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Druvis_III_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Lilya", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Lilya_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Reality", tag4: "DPS" },
    { name: "A-Knight", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/A-Knight_Icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Reality", tag4: "DPS" },
    { name: "Sotheby", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Sotheby_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "Healer" },
    { name: "X", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/X_Icon.webp", tag1: "5✦", tag2: "Intelligence", tag3: "Reality", tag4: "Support" },
    { name: "Sweetheart", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Sweetheart_Icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Baby Blue", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Baby_Blue_Icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "Support" },
    { name: "Charlie", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Charlie_Icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Bkornblume", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Bkornblume_Icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Reality", tag4: "Support" },
    { name: "Dikke", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Dikke_Icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Mental", tag4: "DPS" },
    { name: "Sonetto", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Sonetto_Icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Reality", tag4: "Support" },
    { name: "Balloon Party", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Balloon_Party_Icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Reality", tag4: "Healer" },
    { name: "Regulus", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Regulus_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Centurion", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Centurion_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Necrologist", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Necrologist_Icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Support" },
    { name: "Satsuki", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Satsuki_Icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "An-an Lee", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/An-an_Lee_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "Support" },
    { name: "Matilda", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Matilda_Icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Tennant", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Tennant_Icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Medicine Pocket", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Medicine_Pocket_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Mental", tag4: "Healer" },
    { name: "Voyager", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Voyager_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Support" },
    { name: "Click", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Click_Icon.webp", tag1: "5✦", tag2: "Spirit", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Eternity", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Eternity_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "DPS" },
    { name: "Ms. Newbabel", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Ms._Newbabel_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "Shield" },
    { name: "Melania", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Melania_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Mental", tag4: "DPS" },
    { name: "Pickles", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Pickles_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Mental", tag4: "Support" },
    { name: "Diggers", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Diggers_Icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Support" },
    { name: "Tooth Fairy", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Tooth_Fairy_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Healer" },
    { name: "Jessica", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Jessica_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "DPS" },
    { name: "Blonney", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Blonney_Icon.webp", tag1: "5✦", tag2: "Star", tag3: "Reality", tag4: "DPS" },
    { name: "Horropedia", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Horropedia_Icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Kaalaa Baunaa", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Kaalaa_Baunaa_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Mental", tag4: "DPS" },
    { name: "Shamane", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Shamane_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Kanjira", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Kanjira_Icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "37", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/37_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "6", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/6_Icon.webp", tag1: "6✦", tag2: "Intelligence", tag3: "Mental", tag4: "Support" },
    { name: "Spathodea", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Spathodea_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Ezra", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Ezra_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Shield" },
    { name: "Ulu", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Ulu_Icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Support" },
    { name: "Desert Flannel", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Desert_Flannel_Icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "Support" },
    { name: "Jiu Niangzi", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Jiu_Niangzi_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "DPS" },
    { name: "Getian", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Getian_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Support" },
    { name: "Yenisei", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Yenisei_Icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "Healer" },
    { name: "Isolde", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Isolde_Icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Marcus", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Marcus_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "Vila", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Vila_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "Healer" },
    { name: "Windsong", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Windsong_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Avgust", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Avgust_Icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Support" },
    { name: "Semmelweis", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Semmelweis_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "Support" },
    { name: "Lucy", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Lucy_Icon.webp", tag1: "6✦", tag2: "Intelligence", tag3: "Reality", tag4: "DPS" },
    { name: "Kakania", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Kakania_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "Support" },
    { name: "Lorelei", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Lorelei_Icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "Support" },
    { name: "J", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/J_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Mercuria", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Mercuria_Icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Mental", tag4: "Support" },
    { name: "Tuesday", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Tuesday_Icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Argus", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Argus_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "Support" },
    { name: "Barbara", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Barbara_Icon.webp", tag1: "5✦", tag2: "Spirit", tag3: "Mental", tag4: "Shield" },
    { name: "Anjo Nala", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Anjo_Nala_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Lopera", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Lopera_Icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Support" },
    { name: "Mr. Duncan", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Mr._Duncan_Icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Willow", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Willow_Icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "Flutterpage", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Flutterpage_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Brimley", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Brimley_Icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Barcarola", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Barcarola_Icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Fatutu", image: "https://seiza-tsukii.github.io/Reverse-1999-Pick-Ban/assets/images/Fatutu_Icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Mental", tag4: "Healer" },
]

// État des picks et bans
let team1Picks = [];
let team2Picks = [];
let bans = [];

// Ordre des tours
const turnOrder = [
    { team: 1, action: "ban", count: 2 },
    { team: 2, action: "ban", count: 2 },
    { team: 1, action: "pick", count: 2 },
    { team: 2, action: "pick", count: 2 },
    { team: 1, action: "pick", count: 2 },
    { team: 2, action: "pick", count: 2 },
    { team: 1, action: "ban", count: 2 },
    { team: 2, action: "ban", count: 2 },
    { team: 1, action: "pick", count: 2 },
    { team: 2, action: "pick", count: 2 },
    { team: 1, action: "pick", count: 2 },
    { team: 2, action: "pick", count: 2 },
];

let currentTurnIndex = 0;
let selectionsInCurrentTurn = 0; // Compteur de sélections dans le tour actuel

// Filtres actifs
let activeStarFilter = null;
let activeTypeFilter = null;
let activeDmgTypeFilter = null; // Filtre pour "dmg type"
let activeNicheFilter = null;   // Filtre pour "niche"

// Fonction pour créer les boutons des personnages
function createCharacterButtons() {
    const charactersDiv = document.getElementById('characters');
    charactersDiv.innerHTML = ''; // Réinitialiser la liste
    characters.forEach(character => {
        if ((!activeStarFilter || character.tag1 === activeStarFilter) &&
            (!activeTypeFilter || character.tag2 === activeTypeFilter) &&
            (!activeDmgTypeFilter || character.tag3 === activeDmgTypeFilter) && // Filtre "dmg type"
            (!activeNicheFilter || character.tag4 === activeNicheFilter)) {      // Filtre "niche"
            const button = document.createElement('div');
            button.className = 'character';
            button.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="tags">${character.tag1} | ${character.tag2} | ${character.tag3} | ${character.tag4}</div>
            `;

            // Désactiver le personnage s'il est déjà sélectionné
            if (bans.some(b => b.name === character.name) ||
                team1Picks.some(p => p.name === character.name) ||
                team2Picks.some(p => p.name === character.name)) {
                button.style.opacity = '0.5';
                button.style.pointerEvents = 'none';
            } else {
                button.addEventListener('click', () => handleCharacterSelection(character));
            }

            charactersDiv.appendChild(button);
        }
    });
}

// Fonction pour filtrer par étoile
function filterByStar(star) {
    activeStarFilter = activeStarFilter === star ? null : star;
    updateFilterButtons('filterByStar', star);
    createCharacterButtons();
}

// Fonction pour filtrer par type
function filterByType(type) {
    activeTypeFilter = activeTypeFilter === type ? null : type;
    updateFilterButtons('filterByType', type);
    createCharacterButtons();
}

// Fonction pour filtrer par "dmg type"
function filterByDmgType(dmgType) {
    activeDmgTypeFilter = activeDmgTypeFilter === dmgType ? null : dmgType;
    updateFilterButtons('filterByDmgType', dmgType);
    createCharacterButtons();
}

// Fonction pour filtrer par "niche"
function filterByNiche(niche) {
    activeNicheFilter = activeNicheFilter === niche ? null : niche;
    updateFilterButtons('filterByNiche', niche);
    createCharacterButtons();
}

// Fonction pour mettre à jour l'état des boutons de filtre
function updateFilterButtons(filterFunction, value) {
    // Réinitialiser tous les boutons du groupe
    document.querySelectorAll('.filters button').forEach(button => {
        if (button.getAttribute('onclick').includes(filterFunction)) {
            button.classList.remove('active');
        }
    });

    // Activer le bouton sélectionné
    if (value) {
        const activeButton = document.querySelector(`.filters button[onclick*="${filterFunction}('${value}')"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
}

// Fonction pour réinitialiser les filtres
function resetFilters() {
    activeStarFilter = null;
    activeTypeFilter = null;
    activeDmgTypeFilter = null;
    activeNicheFilter = null;
    document.querySelectorAll('.filters button').forEach(button => {
        button.classList.remove('active');
    });
    createCharacterButtons();
}

// Fonction pour gérer la sélection d'un personnage
function handleCharacterSelection(character) {
    const currentTurn = turnOrder[currentTurnIndex];

    if (currentTurn.action === "ban") {
        bans.push(character);
        updateBans();
        socket.emit('ban', { code: 'PARTIE_CODE', character }); // Envoyer le ban à Socket.IO
    } else if (currentTurn.action === "pick") {
        if (currentTurn.team === 1) {
            team1Picks.push(character);
            updatePicks('team1-picks', team1Picks);
        } else {
            team2Picks.push(character);
            updatePicks('team2-picks', team2Picks);
        }
        socket.emit('pick', { code: 'PARTIE_CODE', character }); // Envoyer le pick à Socket.IO
    }

    disableCharacter(character);
    selectionsInCurrentTurn++;

    // Vérifie si le nombre de sélections requis est atteint
    if (selectionsInCurrentTurn >= currentTurn.count) {
        nextTurn();
    } else {
        updateTurnText(); // Met à jour le texte du tour pour refléter les sélections restantes
    }
}

// Fonction pour mettre à jour les bans
function updateBans() {
    const bansDiv = document.getElementById('bans');
    const banSlots = bansDiv.querySelectorAll('.ban-slot');

    banSlots.forEach((slot, index) => {
        if (bans[index]) {
            slot.innerHTML = `
                <img src="${bans[index].image}" alt="${bans[index].name}">
                <span>${bans[index].name}</span>
            `;
        } else {
            slot.innerHTML = ''; // Réinitialiser le slot si vide
        }
    });
}

// Fonction pour mettre à jour les picks
function updatePicks(teamId, picks) {
    const picksDiv = document.getElementById(teamId);
    const pickSlots = picksDiv.querySelectorAll('.pick-slot');

    pickSlots.forEach((slot, index) => {
        if (picks[index]) {
            slot.innerHTML = `
                <img src="${picks[index].image}" alt="${picks[index].name}">
                <span>${picks[index].name}</span>
            `;
        } else {
            slot.innerHTML = ''; // Réinitialiser le slot si vide
        }
    });
}

// Fonction pour désactiver un personnage après pick/ban
function disableCharacter(character) {
    const characterButtons = document.querySelectorAll('.character');
    characterButtons.forEach(button => {
        if (button.querySelector('img').src.includes(character.image)) {
            button.style.opacity = '0.5';
            button.style.pointerEvents = 'none';
        }
    });
}

// Fonction pour passer au tour suivant
function nextTurn() {
    selectionsInCurrentTurn = 0; // Réinitialise le compteur de sélections
    currentTurnIndex++;

    if (currentTurnIndex < turnOrder.length) {
        updateTurnText();
    } else {
        alert("The pick and ban phase is over!");
    }
}

// Fonction pour mettre à jour le texte du tour
function updateTurnText() {
    const currentTurn = turnOrder[currentTurnIndex];
    const actionText = currentTurn.action === "ban" ? "Ban" : "Pick";
    const remainingSelections = currentTurn.count - selectionsInCurrentTurn;
    const turnText = `Team ${currentTurn.team}'s turn: ${actionText} ${remainingSelections} more character(s)`;
    document.getElementById('turn-text').textContent = turnText;
}

// Écouter les événements Socket.IO
socket.on('pick', (data) => {
    if (data.team === 1) {
        team1Picks.push(data.character);
        updatePicks('team1-picks', team1Picks);
    } else {
        team2Picks.push(data.character);
        updatePicks('team2-picks', team2Picks);
    }
    disableCharacter(data.character);
});

socket.on('ban', (data) => {
    bans.push(data.character);
    updateBans();
    disableCharacter(data.character);
});

// Initialisation
createCharacterButtons();
updateTurnText();