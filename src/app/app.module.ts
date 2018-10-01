import { RepoServiceService } from './repo-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DisplayReposComponent } from './display-repos/display-repos.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchRepoPipe } from './search-repo.pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBottomSheetModule, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { RepoBottomsheetComponent } from './repo-bottomsheet/repo-bottomsheet.component';
import {MatBottomSheetRef} from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { SelectOrganizationComponent } from './select-organization/select-organization.component';
import {Pipe, PipeTransform} from '@angular/core';
   
@NgModule({
  declarations: [  
    AppComponent,
    DisplayReposComponent,
    SearchRepoPipe,
    RepoBottomsheetComponent,
    NotFoundComponent,
    SelectOrganizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,  
    MatIconModule,  
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatBottomSheetModule,
   
  ],
  entryComponents: [
    RepoBottomsheetComponent
  ],
  providers: [RepoServiceService,{ provide: MatBottomSheetRef, useValue: {} }, 
            { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }, RepoBottomsheetComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
