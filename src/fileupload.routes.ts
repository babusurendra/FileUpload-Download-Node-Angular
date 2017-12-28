// import { PostListComponent } from './post-list/post-list.component';
// import { NewPostComponent } from './new-post/new-post.component';
// import { EditPostComponent } from './edit-post/edit-post.component';
// import { postDetailComponent } from './post-detail/post-detail.component';
import {FileUploadComponent} from './file-upload.component';

export const routes = [
    {
        path:'',children:[
            {
                path:'',component:FileUploadComponent
            },
            {
                
            }
        ]
    }
];