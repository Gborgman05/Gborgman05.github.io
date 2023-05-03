import { Component } from '@angular/core';
import { Favorite } from '../about/favorite.model';

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.scss']
})
export class BoardGamesComponent {
  favoriteBG:Favorite[] = [
  { category: 'Board Game', name: 'Spirit Island', link: 'https://boardgamegeek.com/boardgame/162886/spirit-island' },
  { category: 'Board Game', name: 'Arkham Horror: The Card Game', link: 'https://boardgamegeek.com/boardgame/205637/arkham-horror-card-game' },
  { category: 'Board Game', name: 'Gloomhaven', link: 'https://boardgamegeek.com/boardgame/174430/gloomhaven' },
]

}
