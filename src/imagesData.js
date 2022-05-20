import locNar from './assets/the-loc-nar.jpg'

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
        id: 'bowser',
        name: 'Bowser',
        franchise: 'Super Mario Bros',
        // image: bowser,
        difficulty: 'easy',
        found: false,
      },
      // Medium
      {
        id: 'yubaba',
        name: 'Yubaba',
        franchise: 'Spirited Away',
        // image: yubaba,
        difficulty: 'medium',
        found: false,
      },
      // Hard
      {
        id: 'the-knight',
        name: 'The Knight',
        franchise: 'Hollow Knight',
        // image: theKnight,
        difficulty: 'hard',
        found: false,
      },
    ],
  },
   

]
export default imagesData;