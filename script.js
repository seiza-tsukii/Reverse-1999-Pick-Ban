// Liste des personnages avec images et tags
const characters = [
    { name: "Druvis III", image: "img/druvis_III_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Lilya", image: "img/lilya_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Reality", tag4: "DPS" },
    { name: "A-Knight", image: "img/a-knight_icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Reality", tag4: "DPS" },
    { name: "Sotheby", image: "img/sotheby_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "Healer" },
    { name: "X", image: "img/x_icon.webp", tag1: "5✦", tag2: "Intelligence", tag3: "Reality", tag4: "Support" },
    { name: "Sweetheart", image: "img/sweetheart_icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Baby Blue", image: "img/baby_blue_icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "Support" },
    { name: "Charlie", image: "img/charlie_icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Bkornblume", image: "img/bkornblume_icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Reality", tag4: "Support" },
    { name: "Dikke", image: "img/dikke_icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Mental", tag4: "DPS" },
    { name: "Sonetto", image: "img/sonetto_icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Reality", tag4: "Support" },
    { name: "Balloon Party", image: "img/balloon_party_icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Reality", tag4: "Healer" },
    { name: "Regulus", image: "img/regulus_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Centurion", image: "img/centurion_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Necrologist", image: "img/necrologist_icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Support" },
    { name: "Satsuki", image: "img/satsuki_icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "An-an Lee", image: "img/an-an_lee_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "Support" },
    { name: "Matilda", image: "img/matilda_icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Tennant", image: "img/tennant_icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Medicine Pocket", image: "img/medicine_pocket_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Mental", tag4: "Healer" },
    { name: "Voyager", image: "img/voyager_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Support" },
    { name: "Click", image: "img/click_icon.webp", tag1: "5✦", tag2: "Spirit", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Eternity", image: "img/eternity_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "DPS" },
    { name: "Ms. Newbabel", image: "img/ms._newbabel_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "Shield" },
    { name: "Melania", image: "img/melania_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Mental", tag4: "DPS" },
    { name: "Pickles", image: "img/pickles_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Mental", tag4: "Support" },
    { name: "Diggers", image: "img/diggers_icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Support" },
    { name: "Tooth Fairy", image: "img/tooth_fairy_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Healer" },
    { name: "Jessica", image: "img/jessica_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "DPS" },
    { name: "Blonney", image: "img/blonney_icon.webp", tag1: "5✦", tag2: "Star", tag3: "Reality", tag4: "DPS" },
    { name: "Horropedia", image: "img/horropedia_icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Kaalaa Baunaa", image: "img/kaalaa_baunaa_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Mental", tag4: "DPS" },
    { name: "Shamane", image: "img/shamane_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Kanjira", image: "img/kanjira_icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "37", image: "/Reverse-1999-Pick-Ban/images/37_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "6", image: "img/6_icon.webp", tag1: "6✦", tag2: "Intelligence", tag3: "Mental", tag4: "Support" },
    { name: "Spathodea", image: "img/spathodea_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Ezra", image: "img/ezra_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "Shield" },
    { name: "Ulu", image: "img/ulu_icon.webp", tag1: "5✦", tag2: "Mineral", tag3: "Mental", tag4: "Support" },
    { name: "Desert Flannel", image: "img/desert_flannel_icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "Support" },
    { name: "Jiu Niangzi", image: "img/jiu_niangzi_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "DPS" },
    { name: "Getian", image: "img/getian_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Support" },
    { name: "Yenisei", image: "img/yenisei_icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "Healer" },
    { name: "Isolde", image: "img/isolde_icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Marcus", image: "img/marcus_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "Vila", image: "img/vila_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "Healer" },
    { name: "Windsong", image: "img/windsong_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Avgust", image: "img/avgust_icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Support" },
    { name: "Semmelweis", image: "img/semmelweis_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Reality", tag4: "Support" },
    { name: "Lucy", image: "img/lucy_icon.webp", tag1: "6✦", tag2: "Intelligence", tag3: "Reality", tag4: "DPS" },
    { name: "Kakania", image: "img/kakania_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "Support" },
    { name: "Lorelei", image: "img/lorelei_icon.webp", tag1: "5✦", tag2: "Star", tag3: "Mental", tag4: "Support" },
    { name: "J", image: "img/j_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Mercuria", image: "img/mercuria_icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Mental", tag4: "Support" },
    { name: "Tuesday", image: "img/tuesday_icon.webp", tag1: "6✦", tag2: "Spirit", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Argus", image: "img/argus_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Reality", tag4: "Support" },
    { name: "Barbara", image: "img/barbara_icon.webp", tag1: "5✦", tag2: "Spirit", tag3: "Mental", tag4: "Shield" },
    { name: "Anjo Nala", image: "img/anjo_nala_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Lopera", image: "img/lopera_icon.webp", tag1: "6✦", tag2: "Beast", tag3: "Reality", tag4: "Support" },
    { name: "Mr. Duncan", image: "img/mr._duncan_icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Reality", tag4: "DPS" },
    { name: "Willow", image: "img/willow_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "Flutterpage", image: "img/flutterpage_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Brimley", image: "img/brimley_icon.webp", tag1: "5✦", tag2: "Beast", tag3: "Mental", tag4: "Sub-DPS" },
    { name: "Barcarola", image: "img/barcarola_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Mental", tag4: "DPS" },
    { name: "Fatutu", image: "img/fatutu_icon.webp", tag1: "6✦", tag2: "Mineral", tag3: "Mental", tag4: "Healer" },
    { name: "Liang Yue", image: "img/liang_yue_icon.webp", tag1: "6✦", tag2: "Star", tag3: "Reality", tag4: "Sub-DPS" },
    { name: "Noire", image: "img/noire_icon.webp", tag1: "6✦", tag2: "Plant", tag3: "Mental", tag4: "DPS" },
    { name: "Loggerhead", image: "img/loggerhead_icon.webp", tag1: "5✦", tag2: "Plant", tag3: "Mental", tag4: "Healer" },
];

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

// Socket.IO pour la synchronisation en temps réel
const socket = io('http://localhost:3000');

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