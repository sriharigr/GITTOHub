import { RepoServiceService } from './../repo-service.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.css']
})
export class RepoViewComponent implements OnInit {


  repository: any = {};
  repoUrl: string = "";
  isCloneUrlVisible: boolean = false;
  constructor(private http: HttpClient, private repoService: RepoServiceService, private route: ActivatedRoute, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.repoUrl = "" + this.route.snapshot.params['repoUrl'];
    if(this.repoUrl!=""){
      this.repoService.getOneRepoData(this.repoUrl).subscribe((response: any)=>{
        this.repository = response;
        console.log(this.repository); 
      })
    }
  }

  viewCloneUrl(){
    const el = document.createElement('textarea');
   el.value = "git clone " + this.repository.clone_url;
   el.style.position = 'absolute';
   el.style.left = '-9999px';
   document.body.appendChild(el);
   el.select();
   document.execCommand('copy'); 
   this.openSnackBar("Copied to clipboard", "");
    
  }

  viewContributors(){
    this.http.get(this.repository.contributors_url).subscribe((response)=>{
      console.log("response", response);  
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
