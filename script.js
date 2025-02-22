// Distribution des personnages
const charactersDistribution = {
    "6✦ Star": ["Windsong", "37", "Tooth Fairy", "Flutterpage", "Lilya", "Regulus", "Voyager", "Ezra", "Barcarola"],
    "6✦ Plant": ["Vila", "Druvis III", "Sotheby", "Jessica", "Marcus", "Willow", "An-an Lee", "Argus", "Kakania"],
    "6✦ Mineral": ["Jiu Niangzi", "Kaalaa Baunaa", "Fatutu", "Eternity", "Pickles", "Semmelweis", "Ms. Newbabel"],
    "6✦ Beast": ["Spathodea", "Centurion", "Getian", "Medicine Pocket", "J", "Melania", "Anjo Nala", "Lopera", "Shamane"],
    "6✦ Spirit": ["Isolde", "A-Knight", "Mercuria", "Tuesday"],
    "6✦ Intelligence": ["6", "Lucy"],
    "5✦ Star": ["Baby Blue", "Lorelei", "Matilda", "Charlie", "Blonney", "Yenisei"],
    "5✦ Plant": ["Bkornblume", "Satsuki", "Kanjira", "Avgust", "Diggers"],
    "5✦ Mineral": ["Brimley", "Sonetto", "Balloon Party", "Necrologist", "Horropedia", "Ulu"],
    "5✦ Beast": ["Sweetheart", "Tennant", "Dikke", "Mr. Duncan"],
    "5✦ Spirit": ["Click", "Barbara"],
    "5✦ Intelligence": ["X"]
};

// Liste complète des personnages avec images et tags
const characters = [];
for (const [tag, names] of Object.entries(charactersDistribution)) {
    names.forEach(name => {
        characters.push({
            name: name,
            image: `img/${name.toLowerCase().replace(/ /g, '_')}_icon.webp`, // Exemple : img/windsong_icon.webp
            tag1: tag.split(' ')[0], // Exemple : "6✦"
            tag2: tag.split(' ')[1]  // Exemple : "Star"
        });
    });
}

// État des picks et bans
let team1Picks = [];
let team2Picks = [];
let bans = [];

// Ordre des tours
const turnOrder = [
    { team: 1, action: "ban" },
    { team: 1, action: "ban" },
    { team: 2, action: "ban" },
    { team: 2, action: "ban" },
    { team: 1, action: "pick" },
    { team: 1, action: "pick" },
    { team: 2, action: "pick" },
    { team: 2, action: "pick" },
    { team: 1, action: "pick" },
    { team: 1, action: "pick" },
    { team: 2, action: "pick" },
    { team: 2, action: "pick" },
    { team: 1, action: "ban" },
    { team: 1, action: "ban" },
    { team: 2, action: "ban" },
    { team: 2, action: "ban" },
    { team: 1, action: "pick" },
    { team: 1, action: "pick" },
    { team: 2, action: "pick" },
    { team: 2, action: "pick" },
    { team: 1, action: "pick" },
    { team: 1, action: "pick" },
    { team: 2, action: "pick" },
    { team: 2, action: "pick" },
];

let currentTurnIndex = 0;

// Filtres actifs
let activeStarFilter = null;
let activeTypeFilter = null;

// Fonction pour créer les boutons des personnages
function createCharacterButtons() {
    const charactersDiv = document.getElementById('characters');
    charactersDiv.innerHTML = ''; // Réinitialiser la liste
    characters.forEach(character => {
        if ((!activeStarFilter || character.tag1 === activeStarFilter) &&
            (!activeTypeFilter || character.tag2 === activeTypeFilter)) {
            const button = document.createElement('div');
            button.className = 'character';
            button.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <div class="tags">${character.name}</div>
                <div class="tags">${character.tag1} | ${character.tag2}</div>
            `;
            button.addEventListener('click', () => handleCharacterSelection(character));
            charactersDiv.appendChild(button);
        }
    });
}

// Fonction pour filtrer par étoile
function filterByStar(star) {
    activeStarFilter = activeStarFilter === star ? null : star;
    createCharacterButtons();
}

// Fonction pour filtrer par type
function filterByType(type) {
    activeTypeFilter = activeTypeFilter === type ? null : type;
    createCharacterButtons();
}

// Fonction pour réinitialiser les filtres
function resetFilters() {
    activeStarFilter = null;
    activeTypeFilter = null;
    createCharacterButtons();
}

// Fonction pour gérer la sélection d'un personnage
function handleCharacterSelection(character) {
    const currentTurn = turnOrder[currentTurnIndex];
    if (currentTurn.action === "ban") {
        bans.push(character);
        updateBans();
    } else if (currentTurn.action === "pick") {
        if (currentTurn.team === 1) {
            team1Picks.push(character);
            updatePicks('team1-picks', team1Picks);
        } else {
            team2Picks.push(character);
            updatePicks('team2-picks', team2Picks);
        }
    }
    disableCharacter(character);
    nextTurn();
}

// Fonction pour mettre à jour les bans
function updateBans() {
    const bansDiv = document.getElementById('bans');
    bansDiv.innerHTML = `<strong>Bans:</strong> ${bans.map(b => `
        <div class="banned-character">
            <img src="${b.image}" alt="${b.name}">
            <span>${b.name}</span>
        </div>
    `).join('')}`;
}

// Fonction pour mettre à jour les picks
function updatePicks(teamId, picks) {
    const picksDiv = document.getElementById(teamId);
    picksDiv.innerHTML = `<strong>Picks:</strong> ${picks.map(p => `
        <div class="picked-character">
            <img src="${p.image}" alt="${p.name}">
            <span>${p.name}</span>
        </div>
    `).join('')}`;
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
    currentTurnIndex++;
    if (currentTurnIndex < turnOrder.length) {
        updateTurnText();
    } else {
        alert("Pick & Ban finished !");
    }
}

// Fonction pour mettre à jour le texte du tour
function updateTurnText() {
    const currentTurn = turnOrder[currentTurnIndex];
    const actionText = currentTurn.action === "ban" ? "ban" : "pick";
    const turnText = `Player ${currentTurn.team} turn : ${actionText}`;
    document.getElementById('turn-text').textContent = turnText;
}

// Initialisation
createCharacterButtons();
updateTurnText();