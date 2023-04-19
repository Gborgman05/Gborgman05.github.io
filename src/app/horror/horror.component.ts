import { Component } from '@angular/core';
import { Favorite } from '../about/favorite.model';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent {
  favoriteHorror:Favorite[] = []


}
