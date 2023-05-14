import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Constellation, Star} from "../../Sky-management-backend/src/models/models";
import {map} from "rxjs/operators"
import { Console } from "console";


@Injectable({providedIn:'root'})
export class PostService{
   private constallation:  Post [] = [];
   private postsUpdated = new Subject <Post [] >();
   isFetching = false;

   constructor(private http:HttpClient){}

   addPosts(id:number, name: string, description: string, imageLink: string, stars: Star[]){
       const post ={ id:id, name: name, description: description, imageLink: imageLink, stars: stars};
      this.http.post("http://localhost:3000/constellations/add",post)   
       .subscribe((responseData) => { console.log(responseData)
        
         this.constallation.push(post);
         this.postsUpdated.next([...this.constallation]);

           
         });
      } 

  //  addPosts(name: string, description: string, imageLink: string, stars: Star[]) {
  //     const post: Post = { id: null, name: name, description: description, imageLink: imageLink, stars: stars  };
  //     this.http
  //       .post<{ postId: number }>("http://localhost:3000/constellations/add", post)
  //       .subscribe(responseData => {
  //        console.log(responseData)
  //         const id = responseData.postId;
  //         post.id = id;
  //         this.constallation.push(post);
  //         this.postsUpdated.next([...this.constallation]);
  //       });
  //   }
   getPosts(){
      this.isFetching = true;
   return this.http.get<{constallation:Post[]}>("http://localhost:3000/constellations/")
    .pipe(
      map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    )
    .subscribe(posts => {
      console.log(posts)
      this.isFetching = false;
      this.constallation = posts;
      this.postsUpdated.next([...this.constallation]);
     
    });

    


   //  .subscribe(postData => {
   //    console.log(postData);
   //    this.constallation = postData.constallation;
   //    this.postsUpdated.next({...this.constallation});
    
    }

    getConstellation(id:number){
      return this.http.get<{id:number, name: string, description: string, imageLink: string, stars: Star[]}>("http://localhost:3000/constellations/" + id);
     
    }
   
   getPostUpdateListener(){
    return this.postsUpdated.asObservable();
    
   }


   deletePost(postId: number) {
       this.http.delete(`http://localhost:3000/constellations/delete/${postId}`)
        .subscribe(() => {
          const updatedPosts = this.constallation.filter(post => post.id !== postId );
          this.constallation= updatedPosts;
          this.postsUpdated.next([...this.constallation]);
        });
    }

     //update method
  updatePost(id: number, name: string, description: string, imageLink: string, stars: Star[]) {
   const post: Post = { id: id, name: name, description: description, imageLink: imageLink, stars: stars };
   this.http
     .put("http://localhost:3000/constellation/" + id, post)
     .subscribe(response => {
       const updatedPosts = [...this.constallation];
       const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
       updatedPosts[oldPostIndex] = post;
       this.constallation = updatedPosts;
       this.postsUpdated.next([...this.constallation]);
      //  this.router.navigate(["/"]);
     });
 }


}
