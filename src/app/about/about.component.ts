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
  { category: 'Book', name: 'Mistborn', link: '' },
  { category: 'Book', name: 'The Way of Kings', link: '' },
  { category: 'Book', name: 'Dune', link: '' },

  { category: 'Hobby', name: 'Board Games', link: '' },
  { category: 'Hobby', name: 'Hiking', link: '' },
  { category: 'Hobby', name: 'Horror Movies', link: '' },

  { category: 'Movie', name: 'Hereditary', link: '' },
  { category: 'Movie', name: 'Inception', link: '' },
  { category: 'Movie', name: 'The Secret Life of Walter Mitty', link: '' },

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

  { category: 'Game', name: "Sid Meier's Civilization", link: '' },
  { category: 'Game', name: 'Phasmophobia', link: '' },
  { category: 'Game', name: 'Stardew Valley', link: '' },
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