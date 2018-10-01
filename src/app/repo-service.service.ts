import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {

  repoData: BehaviorSubject<Object> = new BehaviorSubject<Object>(new Object);
  totalRepoData: any [] = [];
  bottomSheetRepoData:BehaviorSubject<string> = new BehaviorSubject<string>("");
  openRepo: Subject<MouseEvent> = new Subject<MouseEvent>();
  orgsData: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);   
  constructor(private http: HttpClient) { }

  getAllRepoData(orgsName, per_page){
    return this.http.get(`https://api.github.com/orgs/`+orgsName+`/repos?per_page=`+per_page
    );
   }  

   getOneRepoData(url){
    return this.http.get(url); 
   }
   
  getOrgsData(orgName){
    return this.http.get(`https://api.github.com/orgs/`+orgName
  );
  } 
}
