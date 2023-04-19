import { Component, Input} from '@angular/core';
import { Favorite } from './favorite.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name = 'Galen Borgman';
  profilePicture = 'assets/profile.jpg';
  description = `I am an early-career software engineer with a strong passion for Angular and web technologies. My curiosity extends beyond the realm of web development, as I am also deeply interested in machine learning and its potential to revolutionize various industries. Alongside my technical pursuits, I have a deep appreciation for the art of poetry, which I believe enriches my creative thinking and problem-solving skills. Balancing my love for technology and the written word, I strive to craft innovative, efficient, and scalable solutions that make a difference.`;
  favorites: Favorite[] = [
  { category: 'Book', name: 'Mistborn', link: 'https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/' },
  { category: 'Book', name: 'The Way of Kings', link: 'https://www.brandonsanderson.com/the-stormlight-archive-series/' },
  { category: 'Book', name: 'Dune', link: 'https://www.goodreads.com/book/show/44767458-dune' },

  { category: 'Hobby', name: 'Board Games', link: '/games' },
  { category: 'Hobby', name: 'Hiking', link: '/hiking' },
  { category: 'Hobby', name: 'Horror Movies', link: '/horror' },

  { category: 'Movie', name: 'Hereditary', link: 'https://www.imdb.com/title/tt7784604/' },
  { category: 'Movie', name: 'Inception', link: 'https://www.imdb.com/title/tt1375666/' },
  { category: 'Movie', name: 'The Secret Life of Walter Mitty', link: 'https://www.imdb.com/title/tt0359950/' },

  {
    category: 'Music',
    name: 'Noah Kahan',
    link: 'https://open.spotify.com/artist/2RQXRUsr4IW1f3mKyKsy4B',
  },
  {
    category: 'Music',
    name: 'Takenobu',
    link: 'https://open.spotify.com/artist/0gnKKarIUyBnDcORsbOdeY',
  },
  {
    category: 'Music',
    name: 'Hozier',
    link: 'https://open.spotify.com/artist/2FXC3k01G6Gw61bmprjgqS',
  },

  { category: 'Game', name: "Sid Meier's Civilization", link: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/' },
  { category: 'Game', name: 'Phasmophobia', link: 'https://store.steampowered.com/app/739630/Phasmophobia/' },
  { category: 'Game', name: 'Stardew Valley', link: 'https://store.steampowered.com/app/413150/Stardew_Valley/' },
];
  categoryLists= this.favorites.reduce((accumulator: any, item: Favorite) => {
    if (!accumulator[item.category]) {
      accumulator[item.category] = [];
    }

    accumulator[item.category].push(item);

    return accumulator;
  }, {});

  getCategoryKeys(): string[] {
    return Object.keys(this.categoryLists);
  }
constructor() {
  this.categoryLists = this.favorites.reduce((accumulator: any, item) => {
  // If the category is not in the accumulator, create a new list
  if (accumulator[item.category]==undefined) {
    accumulator[item.category] = [];
  }

  // Add the item to the category list
  accumulator[item.category].push(item);

  return accumulator;
}, {});
}
}