import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { RepoServiceService } from './../repo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-bottomsheet',
  templateUrl: './repo-bottomsheet.component.html',
  styleUrls: ['./repo-bottomsheet.component.css']
})
export class RepoBottomsheetComponent implements OnInit {

  repoUrl: string = "";
  repository: any = {};
  constructor(private repoService: RepoServiceService,private bottomSheetRef: MatBottomSheetRef<RepoBottomsheetComponent>
  ) { }
  
  ngOnInit() {
    this.repoService.bottomSheetRepoData.subscribe((repoUrl: string)=>{
     this.repoUrl = repoUrl;
     if(this.repoUrl!=""){
      this.repoService.getOneRepoData(this.repoUrl).subscribe((response: any)=>{
        this.repository = response;
        console.log(this.repository);  
      })
    }
    });
    this.repoService.openRepo.subscribe((event: MouseEvent)=>{
      this.openLink(event);
    })  
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
