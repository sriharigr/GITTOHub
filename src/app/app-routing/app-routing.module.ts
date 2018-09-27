import { NotFoundComponent } from './../not-found/not-found.component';
import { RepoViewComponent } from './../repo-view/repo-view.component';
import { DisplayReposComponent } from './../display-repos/display-repos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
DisplayReposComponent

const routes: Routes =[
  {
    path: "", 
    component: DisplayReposComponent, pathMatch: 'full'
},

  { path: 'viewRepo/:repoUrl', component: RepoViewComponent},


{path: '**', component: NotFoundComponent} 
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule {
  
 }
