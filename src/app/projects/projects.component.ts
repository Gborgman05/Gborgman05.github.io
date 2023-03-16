import { Component, Input, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projects = [
    {
      title: "",
      desc: "",
      link: "",
      language: ""
    }
  ];
    constructor (private http: HttpClient) {
      let a = "https://github.com/Gborgman05/informal_business"
      const owner = "Gborgman05";
      const repo_names = ["informal_business", "DATA-301-Final-Project", "algs", "shakespeare-bot-1", "angular-start", "match_sim"];
      repo_names.forEach(repo_name => {
        const loc = `https://api.github.com/repos/${owner}/${repo_name}`
        this.http
        .get(loc)
        .subscribe((response: any) => {
          const repo = response;

          this.projects.push({
            title: repo.name,
            desc: repo.description,
            link: repo.html_url,
            language: repo.language
          })
        });
      });



    }

 

}
