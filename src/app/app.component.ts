import { RepoServiceService } from './repo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tag-line';
  orgsData: any;
  orgsImgUrl: string ="";  
  orgsName: string = "";  
  orgsNotSelected: boolean = true;
constructor(private repoService: RepoServiceService){

}  
 ngOnInit(){
   this.repoService.orgsData.subscribe((response: any)=>{
     if(response!=null){
      this.orgsData = response;
      this.orgsImgUrl = response.avatar_url;
      this.orgsName = response.name;
      this.orgsNotSelected = false;
     }else{
      this.orgsNotSelected = true; 
     }
   })
  
}
 
fork(){
  window.open('https://github.com/sriharigr/Organization_Repos_GitHub');
}
}
