import { Component, Input, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {
  markdownContent: string = "";
  @Input() filename: string = "";

  constructor(private markdownService: MarkdownService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('src/blog-posts/' + this.filename, { responseType: 'text' })
      .subscribe((markdown: string) => {
        this.markdownContent = markdown;
      });
  }
}
