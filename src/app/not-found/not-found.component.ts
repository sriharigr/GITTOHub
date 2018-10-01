import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { }
randomString = ".";
locationUrl = " ";
totalCharacters = 0;
iterations: number = 0;
 possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  ngOnInit() {
    this.showRandomString();
    this.locationUrl = window.location.pathname;

  }

  showRandomString(){

var interval = setInterval(()=>{ 
  this.iterations++;   
  if(this.iterations<=15){
    this.randomString = this.randomString + this.possible.charAt(Math.floor(Math.random() * this.possible.length));
  }else{
    clearInterval(interval);
  }
},250)  
  }

home(){
  this.router.navigate(['']);
}

}
