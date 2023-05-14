import { Injectable } from '@angular/core';
import { Post } from "./post.model";
import { Star2 } from "./star.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Constellation, Star} from "../../Sky-management-backend/src/models/models";
import {map} from "rxjs/operators"
import { Console } from "console";


@Injectable({
  providedIn: 'root'
})
export class StarsService {


   private constallation:  Star2 [] = [];
   private postsUpdated = new Subject <Star2 [] >();
   isFetching = false;

   constructor(private http:HttpClient){}


   //CONSTALLATION
   addPosts(name: string, description: string, imageLink: string, constellation: number) {
      const post: Star2 = { id: null, name: name, description: description, imageLink: imageLink, constellation: constellation };
      this.http
        .post<{ postId: number }>("http://localhost:3000/stars/add", post)
        .subscribe(responseData => {
         console.log(responseData)
          const id = responseData.postId;
          post.id = id;
          this.constallation.push(post);
          this.postsUpdated.next([...this.constallation]);
        });
    }
   getPosts(){
      this.isFetching = true;
   return this.http.get<{constallation:Star2[]}>("http://localhost:3000/stars/")
    .pipe(
      map(responseData => {
        const postsArray: Star2[] = [];
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
    
    }

    getConstellation(id:number){
      return this.http.get<{id:number, name: string, description: string, imageLink: string, constellation:number}>("http://localhost:3000/stars/" + id);
     
    }
   
   getPostUpdateListener(){
    return this.postsUpdated.asObservable();
    
   }


   deletePost(postId: number) {
       this.http.delete(`http://localhost:3000/stars/delete/${postId}`)
        .subscribe(() => {
          const updatedPosts = this.constallation.filter(post => post.id !== postId );
          this.constallation= updatedPosts;
          this.postsUpdated.next([...this.constallation]);
        });
    }

     //update method
  updatePost(id: number, name: string, description: string, imageLink: string, constellation: number) {
   const post: Star2 = { id: id, name: name, description: description, imageLink: imageLink, constellation:constellation };
   this.http
     .put("http://localhost:3000/stars/" + id, post)
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

