import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { GetPostsQuery } from './graphql/queries';
import { Subject } from 'rxjs/Subject';
import { ApolloQueryResult } from 'apollo-client';
import { DeletePostInterface, UpdatePostInterface, PostsInterface } from './graphql/schema';
import { RemovePostMutation, UpdatePostMutation } from './graphql/mutations';
import {Headers} from '@angular/http';
import "rxjs/add/operator/map";
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 
import * as FileSaver from 'file-saver';
import { error } from 'util';
import { ResponseType } from '@angular/http/src/enums';
@Injectable()
export class FileService {
    constructor(private http : Http){}
  downloadfile():Observable<Blob>{
      //console.log("in sevice");
      //return this.http.get(`http://localhost:4040/api/upload/`);
      const type = 'application/vnd.ms-excel';
        let options = new RequestOptions({
            responseType: ResponseContentType.Blob,
            headers: new Headers({ 'Accept': type })
        });
        
        return this.http.get('http://localhost:4040/api/upload/', options)
                .map((response: Response) => <Blob>response.blob())
    }

    downloadzip():Observable<Blob>{
      let options = new RequestOptions({
          responseType:ResponseContentType.Blob,headers:new Headers({'Accept':'application/text/pdf/vnd.ms-excel'})
      })
      return this.http.get('http://localhost:4040/api/upload/zip',options).map((response:Response) =>{
        return <Blob>response.blob()
      })
    }

}


/// Single file download

// downloadfile():Observable<Blob>{
//     //console.log("in sevice");
//     //return this.http.get(`http://localhost:4040/api/upload/`);

//       let options = new RequestOptions({responseType: ResponseContentType.Blob});
      
//       return this.http.get('http://localhost:4040/api/upload/', options)
//               .map((response: Response) => <Blob>response.blob())
//   }