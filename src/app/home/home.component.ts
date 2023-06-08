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
  @Input() desc = "I'm a learner focused on Software Engineering right now. \nI'm always reading something, you can see those here.\nFor some of my projects see here.\nIf you'd like to reach out go here.\n\nIf you want to play tictactoe (with yourself) go here. "
  @Input() posts = ["./src/blog-posts/2020-12-10-First_steps.markdown",
  "2020-12-10-First_steps.markdown",
    "2020-12-10-welcome-to-jekyll.markdown",
    "2020-12-12-statistics-for-data-science.markdown",
    "2020-12-17-My-Favorites.markdown",
    "2020-12-25-Obligatory-Christmas-Episode.md",
    "2020-12-28-search-and-replace.md",
    "2020-12-28-Thank-You-Notes.md",
    "2021-7-12-Huntington-Library-Gardens.md",
    "2021-7-13-Autogenerating-a-Post.md",
    "2021-7-13-Hera-Revisited.md",
    "2022-7-8-Waking-Up.markdown",
    "2023-1-22-Spirit-Island.md",
    "2023-1-29-Sunday.md",]
  constructor() {
  }

}