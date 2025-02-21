import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { motion } from "framer-motion";
import './index.css';

const rarityTags = ["6✦", "5✦"];
const typeTags = ["Star", "Mineral", "Beast", "Plant", "Spirit", "Intelligence"];
const sequence = ["ban", "ban", "ban", "ban", "pick", "pick", "pick", "pick", "pick", "pick", "pick", "pick", "ban", "ban", "ban", "ban", "pick", "pick", "pick", "pick", "pick", "pick", "pick", "pick"];
const playerSequence = [1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2];
const characterNames = {
  "6✦ Star": ["Windsong", "37", "Tooth Fairy", "Flutterpage", "Lilya", "Regulus", "Voyager", "Ezra", "Barcarola"],
  "6✦ Plant": ["Vila", "Druvis III", "Sotheby", "Jessica", "Marcus", "Willow", "An-an Lee", "Argus"],
  "6✦ Mineral": ["Jiu Niangzi", "Kaalaa Baunaa", "Fatutu", "Eternity", "Pickle", "Semmelweiss", "Ms. Newbabel"],
  "6✦ Beast": ["Spathodea", "Centurion", "Getian", "Medicine Pocket", "J", "Melania", "Anjo Nala", "Lopera", "Shamane"],
  "6✦ Spirit": ["Isolde", "A-Knight", "Mercuria", "Tuesday"],
  "6✦ Intelligence": ["6", "Lucy"],
  "5✦ Star": ["Baby Blue", "Lorelei", "Matilda", "Charlie", "Blooney", "Yenisei"],
  "5✦ Plant": ["Bkornblume", "Satsuki", "Kanjira", "Avgust", "Digger"],
  "5✦ Mineral": ["Brimley", "Sonetto", "Balloon Party", "Necrologist", "Horropedia", "Ulu"],
  "5✦ Beast": ["Sweathearth", "Tennant", "Dikke", "Mr. Duncan"],
  "5✦ Spirit": ["Click", "Barbara"],
  "5✦ Intelligence": ["X"]
};

// Generate the characters array based on characterNames
const characters = Object.entries(characterNames).flatMap(([key, names]) => {
  const [rarity, type] = key.split(" ");
  return names.map((name, index) => ({
    id: `${rarity}-${type}-${index}`, // Generate unique IDs
    name,
    rarity,
    type,
  }));
});

export default function PickBan() {
  const [banned, setBanned] = useState([]);
  const [picked, setPicked] = useState([[], []]);
  const [turn, setTurn] = useState(0);

  const handleAction = (character, action) => {
    if (banned.includes(character.id) || picked.flat().some((p) => p.id === character.id)) return;
    if (turn >= sequence.length) return;

    if (action === sequence[turn]) {
      if (action === "ban") {
        setBanned([...banned, character.id]);
      } else if (action === "pick") {
        const newPicked = [...picked];
        newPicked[playerSequence[turn] - 1].push(character);
        setPicked(newPicked);
      }
      setTurn(turn + 1);
    }
  };

  const [filters, setFilters] = useState({ rarity: [], type: [] });
  const filteredCharacters = characters.filter((char) => 
    (filters.rarity.length === 0 || filters.rarity.includes(char.rarity)) &&
    (filters.type.length === 0 || filters.type.includes(char.type))
  );  
  console.log(filteredCharacters); // Vérifie que le filtrage fonctionne correctement

  return (
    <div className="p-6 text-center bg-[#EDCFA9] min-h-screen text-[#AA4A30]">
      <div className="w-full bg-[#D57149] text-white py-3 text-lg font-semibold shadow-md flex items-center px-6">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <nav className="flex space-x-6 ml-6">
          <a href="#" className="hover:text-[#E89F71]">Home</a>
        </nav>
      </div>

      <div className="flex gap-4 my-4">
        {rarityTags.map((rarity) => (
          <label key={rarity} className="flex items-center gap-2">
            <Checkbox
              checked={filters.rarity.includes(rarity)}
              onCheckedChange={() =>
                setFilters({ ...filters, rarity: filters.rarity.includes(rarity) ? filters.rarity.filter((r) => r !== rarity) : [...filters.rarity, rarity] })
              }
            />
            {rarity}
          </label>
        ))}
        {typeTags.map((type) => (
          <label key={type} className="flex items-center gap-2">
            <Checkbox
              checked={filters.type.includes(type)}
              onCheckedChange={() =>
                setFilters({ ...filters, type: filters.type.includes(type) ? filters.type.filter((t) => t !== type) : [...filters.type, type] })
              }
            />
            {type}
          </label>
        ))}
        <Button onClick={() => setFilters({ rarity: [], type: [] })}>Reset Filters</Button>
      </div>

      <h3 className="text-xl font-bold mt-6">Bans</h3>
      <div className="grid grid-cols-8 gap-1 my-2">
        {banned.map((charId, i) => {
          const char = characters.find((c) => c.id === charId);
         if (!char) return null; // Sécurité en cas d'erreur
          return (
            <motion.div key={i} className="w-20 h-20 border-2 border-[#AA4A30] bg-white" animate={{ scale: 1.1 }}>
              <img src={`/${char.name}_icon.webp`} alt={char.name} className="w-full h-full" />
            </motion.div>
           );
          })}
      </div>

      <h3 className="text-xl font-bold mt-6">Picks</h3>
      <div className="flex justify-around">
      <div className="flex justify-around w-full">
  <div className="flex flex-col items-center">
    <h4 className="text-lg font-bold">Player 1</h4>
    <div className="grid grid-cols-4 gap-1 my-2">
      {picked[0].map((char) => (
        <motion.div key={char.id} className="w-20 h-20 border-2 border-[#AA4A30] bg-white" animate={{ scale: 1.1 }}>
          <img src={`/images/${char.name}_icon.webp`} alt={char.name} className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  </div>

  <div className="flex flex-col items-center">
    <h4 className="text-lg font-bold">Player 2</h4>
    <div className="grid grid-cols-4 gap-1 my-2">
      {picked[1].map((char) => (
        <motion.div key={char.id} className="w-20 h-20 border-2 border-[#AA4A30] bg-white" animate={{ scale: 1.1 }}>
          <img src={`/images/${char.name}_icon.webp`} alt={char.name} className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  </div>
</div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        {characters
          .filter((char) => (filters.rarity.length === 0 || filters.rarity.includes(char.rarity)))
          .filter((char) => (filters.type.length === 0 || filters.type.includes(char.type)))
          .map((character) => (
            <Card key={character.id} className={`bg-[#E89F71] ${banned.includes(character.id) || picked.flat().some((p) => p.id === character.id) ? "opacity-50" : ""}`}>
              <CardContent>
              <img src={`public/${character.name}_icon.webp`} alt={`${character.name} icon`} />
                <p className="font-bold">{character.name}</p>
                <p>{character.rarity} | {character.type}</p>
                <Button 
                 onClick={() => handleAction(character, "ban")} 
                 disabled={sequence[turn] !== "ban" || banned.includes(character.id) || picked.flat().some((p) => p.id === character.id)}
                >
                  Ban
                </Button>
                <Button 
                  onClick={() => handleAction(character, "pick")} 
                  disabled={sequence[turn] !== "pick" || banned.includes(character.id) || picked.flat().some((p) => p.id === character.id)}
                >
                  Pick
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  </div>
 );
 }
