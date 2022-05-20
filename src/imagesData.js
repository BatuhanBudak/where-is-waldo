import locNar from './assets/the-loc-nar.jpg'
import kelthuzad from './assets/kelthuzad.png'
import spiderman from './assets/spiderman.png'
import dragonborn from './assets/dragonborn.png'

const imagesData = [
   {
    // The Loc Nar by Egor Klyuchnyk
    // Instagram https://www.instagram.com/ad.2.222/
    // Patreon https://www.patreon.com/Egor
    // Buy his poster https://anomaly-world.com/posters-by-anomaly-world/cyberpunk-poster-ad2222
  
    id: 'the-loc-nar',
    imageName: 'The Loc Nar',
    imageAuthor: 'Egor Klyuchnyk',
    imageUrl: locNar,
    itemList: [
      // Easy
      {
        id: 'kel-thuzad',
        name: 'Kel\'Thuzad',
        franchise: 'Warcraft',
        image: kelthuzad,
        difficulty: 'easy',
        found: false,
      },
      {
        id: 'dragonborn',
        name: 'Dragonborn',
        franchise: 'Skyrim',
        image: dragonborn,
        difficulty: 'medium',
        found: false,
      },
      // Medium
      // Hard
      {
        id: 'spider-man',
        name: 'Spiderman',
        franchise: 'Marvel',
        image: spiderman,
        difficulty: 'hard',
        found: false,
      },
    ],
  },
   

]
export default imagesData;