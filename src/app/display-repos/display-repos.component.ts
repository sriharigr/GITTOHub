import { RepoBottomsheetComponent } from './../repo-bottomsheet/repo-bottomsheet.component';
import { RepoServiceService } from './../repo-service.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-repos',
  templateUrl: './display-repos.component.html',
  styleUrls: ['./display-repos.component.css']
})
export class DisplayReposComponent implements OnInit {

  searchText: string = '';
  color = 'primary';
  mode = 'indeterminate';
  responseObtained: boolean = false;
  totalRepos: number = 0;
  constructor(private router: Router, private repoService: RepoServiceService, private snackBar: MatSnackBar, private bottomSheet: MatBottomSheet, private repoBottomSheet: RepoBottomsheetComponent) { }
  
  ngOnInit() {
    this.repoService.getAllRepoData().subscribe((response: any)=>{
    this.responseObtained = true;
    this.repoData = response;
    this.totalRepos = this.repoData.length;
    })
  }
repoData: any[]=[];

view(index){
  this.repoService.bottomSheetRepoData.next(this.repoData[index].url);
}
viewCloneUrl(index){
  const el = document.createElement('textarea');
 el.value = "git clone " + this.repoData[index].clone_url;
 el.style.position = 'absolute'; 
 el.style.left = '-9999px';
 document.body.appendChild(el);
 el.select();
 document.execCommand('copy'); 
 this.openSnackBar("Copied to clipboard", "");
  
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}
openBottomSheet(): void {
  this.bottomSheet.open(RepoBottomsheetComponent); 
}


}

