import { Component } from '@angular/core';
import { Favorite } from '../about/favorite.model';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent {
  favoriteHorror:Favorite[] = []
  constructor() {
    this.favoriteHorror = [
 { category: 'Movie ', name: 'Hereditary', link: 'https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/' },
  { category: 'Book', name: 'The Way of Kings', link: 'https://www.brandonsanderson.com/the-stormlight-archive-series/' },
  { category: 'Book', name: 'Dune', link: 'https://www.goodreads.com/book/show/44767458-dune' },
    ]

  }


}
