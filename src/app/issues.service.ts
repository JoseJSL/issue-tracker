import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from 'src/assets/mock-issues';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {
  private issues: Issue[] = [];

  constructor() {
    issues.forEach(issue => {this.issues.push(issue);});
  }

  getPendingIssues(){
    return this.issues.filter(issue => !issue.completed);
  }

  createIssue(issue: Issue){
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue){
    const index = this.issues.indexOf(issue);
    issue.completed = new Date();
    this.issues[index] = issue;
   }

   getSuggestions(title: string){
     if(title.length > 3){
       return this.issues.filter(issue => issue.title.indexOf(title) !== -1);
     }
     return [];
   }
}
