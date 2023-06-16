import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

interface Post {
  date: string;
  title: string;
  filename: string;
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {
  markdownContent: string = "";
  @Input() filename: string = "";
  fullPath: string = "";
  title: string = "";
  date: string = "";
  readingTime: string = "";
  author: string = "Galen Borgman"

  constructor(private markdownService: MarkdownService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Post[]>('assets/blog-post.json').subscribe(posts => {
      // find the post with the matching filename
      const post = posts.find(p => p.filename === this.filename);

      // if post was found, assign properties from post
      if (post) {
        this.title = post.title;
        this.date = post.date;
        this.filename = post.filename;
        this.fullPath = 'assets/blog-posts/' + this.filename;

        this.http.get('assets/blog-posts/' + this.filename, { responseType: 'text' })
          .subscribe((markdown: string) => {
            this.markdownContent = markdown;
            const words = markdown.split(' ').length;
            this.readingTime = Math.ceil(words / 200) + ' min';
          });
      }
    });
  }

  // your other methods...
}
