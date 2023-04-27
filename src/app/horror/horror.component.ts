import { Component, Input} from '@angular/core';
import { Favorite } from '../about/favorite.model';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent {
  favoriteHorror:Favorite[] = [
  { category: 'Movie', name: 'Hereditary', link: 'https://www.imdb.com/title/tt7784604/' },
  { category: 'Podcast', name: 'The Magnus Archive', link: 'https://rustyquill.com/show/the-magnus-archives/' },
  { category: 'TV Series', name: 'The Haunting of Hill House', link: 'https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House_(TV_series)' },
  { category: 'Movie', name: 'The Conjuring', link: 'https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House_(TV_series)' },
  { category: 'TV Series', name: '', link: 'https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House_(TV_series)' },
]



}
