import { SelectOrganizationComponent } from './../select-organization/select-organization.component';
import { NotFoundComponent } from './../not-found/not-found.component';
import { DisplayReposComponent } from './../display-repos/display-repos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
  

const routes: Routes =[
  {
    path: "", 
    component: SelectOrganizationComponent, pathMatch: 'full'
},  
{
  path: "org/:org", 
  component: SelectOrganizationComponent
}, 
{
  path: ":id/repositories", 
  component: DisplayReposComponent
},


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
