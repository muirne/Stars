
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { StarsService } from '../stars.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Star } from 'Sky-management-backend/src/models/models';
import { Star2 } from '../star.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
   post: Star2
  isLoading = false;
  private mode = "create";
  private postId: number;
  private postsSub: Subscription;


  constructor(
    public starService: StarsService,
    public route: ActivatedRoute
  ) {}

  // edit btn
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {

      if (+paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = +paramMap.get("postId");
        this.isLoading = true;
        this.starService.getConstellation(this.postId).subscribe(postData => {
         this.isLoading = false;
         this.post = { id:postData.id  , name: postData.name, description: postData.description, imageLink: postData.imageLink, constellation: postData.constellation };
        });
      } else {
        this.mode = "create";
        // this.postId = null;
      }
    });
  }



  
// submit btn => if the mode is create add else update
  onSavePost(form: NgForm) {
    this.starService.addPosts(form.value.name, form.value.description, form.value.imageLink, form.value.constellation);
}
}