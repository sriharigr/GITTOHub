import { RepoServiceService } from './../repo-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-organization',
  templateUrl: './select-organization.component.html',
  styleUrls: ['./select-organization.component.css']
})
export class SelectOrganizationComponent implements OnInit {


  organization: string = "";
  noOrgs: boolean = null;  
  orgsImgUrl="";     
  orgsName="";
  orgsData: Object;

  constructor(private repoService: RepoServiceService, private router: Router) { }

  ngOnInit() {
  }
search(){
  this.repoService.getOrgsData(this.orgsName).subscribe((response: any)=>{
    if(response){
          this.orgsImgUrl = response.avatar_url;
          this.orgsData = response;
          this.noOrgs = false;
          this.repoService.orgsData.next(response); 
    }
  },(err)=>{
    if(err){
      if(err.status==404){
        this.noOrgs = true;
      }
    }
  })
}
viewRepositories(){
  this.router.navigate([this.orgsName+'/repositories']);
}

viewUsers(){

}
}
