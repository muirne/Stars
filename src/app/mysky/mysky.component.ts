import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Constellation } from 'Sky-management-backend/src/models/models';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Console } from 'console';
import { StarsService } from '../stars.service';
import { Star2 } from '../star.model';

@Component({
  selector: 'app-mysky',
  templateUrl: './mysky.component.html',
  styleUrls: ['./mysky.component.css']
})
export class MyskyComponent  implements OnInit, OnDestroy{

  posts: Post[] = [];
  stars: Star2[] = [];
  private postsSub: Subscription;
  isLoading = false;

  constructor(
    public postsService: PostService,
    public starsService: StarsService
 
  ) {}

//   ngOnInit() {
//     this.postsService.getPosts();
//     this.postsSub = this.postsService.getPostUpdateListener()
//       .subscribe(response => {
//         this.posts = response;
//       });
// }

  // ngOnInit() {
  //   this.postsService.getPosts();
    
  //   this.postsSub = this.postsService.getPostUpdateListener()
  //     .subscribe((posts: Post[]) => {
  //       this.posts = posts;
  //     });
  // }
  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
      console.log(this.postsService.getPostUpdateListener());

      this.isLoading = true;
      this.starsService.getPosts();
      this.postsSub = this.starsService.getPostUpdateListener()
        .subscribe((posts: Star2[]) => {
          this.isLoading = false;
          this.stars = posts;
        });
        console.log(this.starsService.getPostUpdateListener());
        
    }
  
  
  onDelete(postId: number) {
    this.postsService.deletePost(postId);
  }
  onDelete2(postId: number) {
    this.starsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
