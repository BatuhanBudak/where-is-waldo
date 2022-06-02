import locNar from "./assets/the-loc-nar.jpg";
import spiderman from "./assets/spiderman.png";
import universe113 from './assets/universe-113.jpg' 
import cacodemon from './assets/cacodemon.png';
import billCipher from './assets/bill-cipher.png';
import courage from './assets/courage.png';
import homer from "./assets/homer.png"
import kratos from "./assets/kratos.png"
import geralt from "./assets/geralt.png"
import spawn from "./assets/spawn.png"
import noFace from "./assets/no-face.png"

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
        id: "homer",
        name: "Homer Simpson",
        franchise: "Simpsons",
        imageUrl: homer,
        difficulty: "easy",
        found: false,
      },
      {
        id: "kratos",
        name: "Kratos",
        franchise: "God of War",
        imageUrl: kratos,
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
