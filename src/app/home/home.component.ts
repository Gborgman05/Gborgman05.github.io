import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() desc = "I'm a learner focused on Software Engineering right now. \nI'm always reading something, you can see those here.\nFor some of my projects see here.\nIf you'd like to reach out go here.\n\nIf you want to play tictactoe (with yourself) go here. "
  constructor() {
  }

}