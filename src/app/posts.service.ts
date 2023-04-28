import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class PostService{
   private posts: Post[] = [];
   private postsUpdated = new Subject <Post []>();

   getPosts(){
    return [...this.posts];
   }
   getPostUndateListener(){
    return this.postsUpdated.asObservable();
   }
   addPosts(title:string, content:string){
    const post ={title:title, content:content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
   }
}