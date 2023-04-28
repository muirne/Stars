import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mysky',
  templateUrl: './mysky.component.html',
  styleUrls: ['./mysky.component.css']
})
export class MyskyComponent  implements OnInit, OnDestroy{

  posts:Post[] = [];
  private sub: Subscription;


 constructor(public postsService: PostService  ){ }
  
 ngOnInit(){
   this.posts=this.postsService.getPosts();
    this.sub = this.postsService.getPostUndateListener().subscribe();
 }
 ngOnDestroy() {
  this.sub.unsubscribe();
 }
}
