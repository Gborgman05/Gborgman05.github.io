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
  @Input() fullPath: string = "";

  constructor(private markdownService: MarkdownService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fullPath = 'assets/blog-posts/' + this.filename
    this.http.get('assets/blog-posts/' + this.filename, { responseType: 'text' })
      .subscribe((markdown: string) => {
        this.markdownContent = markdown;
      });
  }
}
