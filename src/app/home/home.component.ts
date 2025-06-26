import { Component, Input } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

// main file


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() desc = "Hi! I'm Galen: a curious software engineer, lifelong learner, and builder of fun projects. Explore my work, thoughts, and hobbies below!";
  @Input() posts = [ "2020-12-10-First_steps.md",
    "2020-12-10-welcome-to-jekyll.md",
    "2020-12-12-statistics-for-data-science.md",
    "2020-12-17-My-Favorites.md",
    "2020-12-25-Obligatory-Christmas-Episode.md",
    "2020-12-28-search-and-replace.md",
    "2020-12-28-Thank-You-Notes.md",
    "2021-7-12-Huntington-Library-Gardens.md",
    "2021-7-13-Autogenerating-a-Post.md",
    "2021-7-13-Hera-Revisited.md",
    "2022-7-8-Waking-Up.markdown",
    "2023-1-22-Spirit-Island.md",
    "2023-1-29-Sunday.md",
    "2023-8-29-Timeline.md"]
  constructor() {
  }

}