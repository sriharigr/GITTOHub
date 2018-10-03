import { RepoServiceService } from './../repo-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-select-organization',
  templateUrl: './select-organization.component.html',
  styleUrls: ['./select-organization.component.css']
})
export class SelectOrganizationComponent implements OnInit {


  organization: string = "";
  noOrgs: boolean = null;  
  orgsImgUrl="";     
  orgsName: string='';
  orgsData: Object;
  validResponse: boolean = false;
  constructor(private repoService: RepoServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.orgsName = this.route.snapshot.params['org']){
      this.validResponse = true;
      if(this.router.url == '/org/'+this.orgsName){
        this.search();
       }
      }
  
  }
search(){
  if(this.orgsName!=undefined && this.orgsName!=''){
    this.validResponse = false;
    this.repoService.getOrgsData(this.orgsName).subscribe((response: any)=>{
      if(response){
            this.orgsImgUrl = response.avatar_url;
            this.orgsData = response;
            this.noOrgs = false;
            this.repoService.orgsData.next(response);
            this.validResponse = true; 
            this.router.navigate(['org', this.orgsName]);
      }
    },(err)=>{
      if(err){
        if(err.status==404){
          this.noOrgs = true;
        }
      }
    })
  }

}
viewRepositories(){
  this.router.navigate([this.orgsName+'/repositories']);
}

clearSearch(){
  this.validResponse = false;
}

viewUsers(){

}


}
