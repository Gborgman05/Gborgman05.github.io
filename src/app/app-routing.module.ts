import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BoardComponent } from './board/board.component';
import { HorrorComponent } from './horror/horror.component';
import { BoardGamesComponent } from './board-games/board-games.component';
import { HikesComponent } from './hikes/hikes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tictactoe', component:BoardComponent},
  { path: 'horror', component:HorrorComponent},
  { path: 'games', component:BoardGamesComponent},
  { path: 'hiking', component:HikesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }