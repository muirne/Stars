import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../posts.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-konstelacja',
  templateUrl: './konstelacja.component.html',
  styleUrls: ['./konstelacja.component.css']
})
export class KonstelacjaComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
   post: Post
  isLoading = false;
  private mode = "create";
  private postId: number;
  private postsSub: Subscription;


  constructor(
    public postsService: PostService,
    public route: ActivatedRoute
  ) {}

  // edit btn
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {

      if (+paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = +paramMap.get("postId");
        this.isLoading = true;
        this.postsService.getConstellation(this.postId).subscribe(postData => {
         this.isLoading = false;
         this.post = { id:postData.id  , name: postData.name, description: postData.description, imageLink: postData.imageLink, stars: postData.stars };
        });
      } else {
        this.mode = "create";
        // this.postId = null;
      }
    });
  }



  
// submit btn => if the mode is create add else update
  onSavePost(form: NgForm) {
    this.postsService.addPosts(this.postId, form.value.name, form.value.description, form.value.imageLink, form.value.stars);
    // form.resetForm();
   
    // this.isLoading = true;
    // if (this.mode === "create") {
    //   this.postsService.addPosts(form.value.name, form.value.description, form.value.imageLink, form.value.stars);
      
    // } else {
    //   this.postsService.updatePost(
    //     this.postId,
    //     form.value.name,
    //     form.value.declaration,
    //     form.value.imageLink, 
    //     form.value.stars
        
    //   );
    // }
    // form.resetForm();
  }
}