import { RepoBottomsheetComponent } from './../repo-bottomsheet/repo-bottomsheet.component';
import { RepoServiceService } from './../repo-service.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';   
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';  
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';  

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
  orgsName: string ="";
  orgsData: Object;
  per_page: number = 12;
  constructor(private router: Router, private repoService: RepoServiceService, private snackBar: MatSnackBar, private bottomSheet: MatBottomSheet, private repoBottomSheet: RepoBottomsheetComponent, private route: ActivatedRoute) { }
  
  ngOnInit() {
     this.orgsName = "" + this.route.snapshot.params['id'];  
    this.repoService.getOrgsData(this.orgsName).subscribe((response: any)=>{
      this.repoService.getAllRepoData(this.orgsName, this.per_page).subscribe((response: any)=>{
        this.responseObtained = true;
        this.repoData = response;
        });
        this.repoService.getOrgsData(this.orgsName).subscribe((response: any)=>{
          if(response){
                this.orgsData = response;
                this.totalRepos = response.public_repos; 
    
          }
        },(err)=>{
          if(err){
            if(err.status==404){
              
            }
          }
        })
    }, (err)=>{
      this.router.navigate(['not-found']); 
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

viewMoreRepositories(){
  
  var temp = this.per_page + 12;
if(temp > this.totalRepos){
  this.per_page = this.totalRepos;
  this.getMoreRepositories();
}else{
  this.per_page = temp;
  this.getMoreRepositories();
}
  
}

getMoreRepositories(){
  this.repoService.getAllRepoData(this.orgsName, this.per_page).subscribe((response: any)=>{
    this.responseObtained = true;
    this.repoData = response;
    });
}

}

