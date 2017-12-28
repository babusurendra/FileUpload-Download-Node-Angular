import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import {Http} from '@angular/http';
import { 
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule
 } from '@angular/material';
 import { FileSelectDirective } from 'ng2-file-upload';
import { routes } from './fileupload.routes';
import { HttpClient } from '@angular/common/http';
import {FileUploadComponent} from './file-upload.component';
import{FileService} from './file-upload.service';
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    FileSelectDirective,
    FileUploadComponent,
  ],
  imports: [
    // modules
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    // ApolloModule.forRoot(client)
   
    
  ],
providers:[FileService]
})
export class FileUploadModule {
  public static routes = routes;
}
