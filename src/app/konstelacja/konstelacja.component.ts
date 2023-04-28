import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../posts.service';

@Component({
  selector: 'app-konstelacja',
  templateUrl: './konstelacja.component.html',
  styleUrls: ['./konstelacja.component.css']
})
export class KonstelacjaComponent {
  enteredTitle = "";
  enteredContent = "";
  
  constructor(public postsService:PostService){ }
   onAddPost(form:NgForm){

if (form.invalid) {
  return;
}


   this.postsService.addPosts( form.value.title, form.value.content);
   form.resetForm();
   }


}
