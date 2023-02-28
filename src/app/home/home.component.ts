import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationLink } from 'src/app/navigation-link.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() links: NavigationLink[] = [
    { title: '/About', url: '/about', icon: 'contacts' },
    { title: '/Projects', url: '/projects', icon: 'folder' },
    { title: '/Contact', url: '/contact', icon: 'share' }
  ];
  currentRoute: string = "/";
    constructor(location: Location, router: Router) {
    this.currentRoute = location.path();
    router.events.subscribe(() => {
      this.currentRoute = location.path();
    });
  }


}
