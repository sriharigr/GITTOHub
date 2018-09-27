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
  constructor(private http: HttpClient) { }

  getAllRepoData(){
    return this.http.get(`https://api.github.com/orgs/evolvus/repos?per_page=100`
    );
   }

   getOneRepoData(url){
    return this.http.get(url);
   }
   
}
