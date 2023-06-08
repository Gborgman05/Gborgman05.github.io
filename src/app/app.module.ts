import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone,} from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HikesComponent } from './hikes/hikes.component';
import { HorrorComponent } from './horror/horror.component';
import { BoardGamesComponent } from './board-games/board-games.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    SquareComponent,
    BoardComponent,
    NavBarComponent,
    FooterComponent,
    HikesComponent,
    HorrorComponent,
    BoardGamesComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    library.add(faEnvelope, faPhone, fab, faLinkedin, faGithub);
  }
 }

