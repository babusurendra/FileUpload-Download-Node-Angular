import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { GetPostsQuery } from './graphql/queries';
import { Subject } from 'rxjs/Subject';
import { ApolloQueryResult } from 'apollo-client';
import { DeletePostInterface, UpdatePostInterface, PostsInterface } from './graphql/schema';
import { RemovePostMutation, UpdatePostMutation } from './graphql/mutations';
import {Http,Headers} from '@angular/http'
@Injectable()
export class FileService {
    //constructor(private http : Http){}
//   downloadfile(id){
//       return this.http.get(`http://localhost:4040/api/upload/${id}`).map((res)=>{
//           return res;
//       })
//   }  

}