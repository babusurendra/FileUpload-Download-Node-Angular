import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";
import { FileUploader } from "ng2-file-upload/ng2-file-upload";
import { FileService } from "./file-upload.service";
import { Http } from "@angular/http";
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
import * as FileSaver from "file-saver";
import { setTimeout } from 'timers';

@Component({
  selector: "file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent {
  downloadStatus :boolean = false;
  constructor(private fileservice: FileService, private http: Http) {}
  private URL: any = "http://localhost:4040/api/upload";
  private uploadstatus = false;
  //declare a property called fileuploader and assign it to an instance of a new fileUploader.
  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({
    url: this.URL,
    itemAlias: "file",
    removeAfterUpload: true
  });
  //This is the default title property created by the angular cli. Its responsible for the app works
  title = "app works!";
  statusfun() {
    this.uploadstatus = true;
  }
  ngOnInit() {
    //this.uploadstatus = true;
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      //console.log("ImageUpload:uploaded:", item, status, response);
      //console.log(`itme prg is ${item.progress}`);
      if (item.progress == 100) this.uploadstatus = false;
    };
  }
  downloadfile() {
    this.downloadStatus = true;
    this.fileservice.downloadfile().subscribe(fileData => {
      setTimeout(()=>{
        FileSaver.saveAs(fileData, "report.txt");
        this.downloadStatus = false
      },3000)
      
    });
  }
  downloadzip() {
    this.downloadStatus=true;
    this.fileservice.downloadzip().subscribe(files => {
      FileSaver.saveAs(files, "reports.zip");
      this.downloadStatus= false;
    });
  }
}
