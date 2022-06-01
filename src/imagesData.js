import locNar from "./assets/the-loc-nar.jpg";
import kelthuzad from "./assets/kelthuzad.png";
import spiderman from "./assets/spiderman.png";
import dragonborn from "./assets/dragonborn.png";
import universe113 from './assets/universe-113.jpg' 
import cacodemon from './assets/cacodemon.png';
import billCipher from './assets/bill-cipher.png';
import courage from './assets/courage.png';
const imagesData = [
  {
    // The Loc Nar by Egor Klyuchnyk
    // Instagram https://www.instagram.com/ad.2.222/
    // Patreon https://www.patreon.com/Egor
    // Buy his poster https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222

    id: "the-loc-nar",
    imageName: "The Loc Nar",
    imageAuthor: "Egor Klyuchnyk",
    imageUrl: locNar,
    itemList: [
      {
        id: "kel-thuzad",
        name: "Kel'Thuzad",
        franchise: "Warcraft",
        imageUrl: kelthuzad,
        difficulty: "easy",
        found: false,
      },
      {
        id: "dragonborn",
        name: "Dragonborn",
        franchise: "Skyrim",
        imageUrl: dragonborn,
        difficulty: "medium",
        found: false,
      },

      {
        id: "spiderman",
        name: "Spiderman",
        franchise: "Marvel",
        imageUrl: spiderman,
        difficulty: "hard",
        found: false,
      },
    ],
  },
  {
    /* 
      Universe 113 by Egor Klyuchnyk
      Instagram https://www.instagram.com/ad.2.222/
      Patreon https://www.patreon.com/Egor
      Buy his poster https://anomaly-world.com/posters-by-anomaly-world/universe-113-poster
    */
    id: 'universe-113',
    imageName: 'Universe 113',
    imageAuthor: 'Egor Klyuchnyk',
    imageUrl: universe113,
    itemList: [
      // Easy
      {
        id: 'cacodemon',
        name: 'Cacodemon',
        franchise: 'DOOM',
        imageUrl: cacodemon,
        difficulty: 'easy',
        found: false,
      },
      // Medium
      {
        id: 'bill-cipher',
        name: 'Bill Cipher',
        franchise: 'Gravity Falls',
        imageUrl: billCipher,
        difficulty: 'medium',
        found: false,
      },
      // Hard
      {
        id: 'courage',
        name: 'Courage',
        franchise: 'Courage the Cowardly Dog',
        imageUrl: courage,
        difficulty: 'hard',
        found: false,
      },
    ],
  },
];
export default imagesData;
