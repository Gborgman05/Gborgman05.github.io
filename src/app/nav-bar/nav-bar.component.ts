import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationLink } from 'src/app/navigation-link.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() links: NavigationLink[] = [
    { title: '/', url: '/', icon: 'share' },
    { title: '/about', url: '/about',},
    { title: '/projects', url: '/projects',},
    { title: '/contact', url: '/contact', },
    { title: '/tictactoe', url: '/tictactoe',},
  ];
  currentRoute: string = "/";
    constructor(location: Location, router: Router) {
    this.currentRoute = location.path();
    router.events.subscribe(() => {
      this.currentRoute = location.path();
    });
  }



}
