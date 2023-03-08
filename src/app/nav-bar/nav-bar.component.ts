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
    { title: '/about', url: '/about', icon: 'contacts' },
    { title: '/projects', url: '/projects', icon: 'folder' },
    { title: '/contact', url: '/contact', icon: 'share' },
    { title: '/tictactoe', url: '/tictactoe', icon: 'share' },
    { title: '/', url: '/', icon: 'share' },
  ];
  currentRoute: string = "/";
    constructor(location: Location, router: Router) {
    this.currentRoute = location.path();
    router.events.subscribe(() => {
      this.currentRoute = location.path();
    });
  }



}
