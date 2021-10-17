import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  public showReportIssue = false;
  public issues: Issue[] = [];
  public selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getIssues();
    console.log(this.issues);
  }

  onCloseReport(){
    this.showReportIssue = false;
    this.getIssues();
  }

  private getIssues(){
    this.issues = this.issueService.getPendingIssues();
  }

  onConfirm(confirmed: Boolean){
    if(confirmed && this.selectedIssue){
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }
}
