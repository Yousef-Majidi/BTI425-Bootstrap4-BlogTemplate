import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styles: [
  ]
})
export class NewPostComponent implements OnInit {
  blogPost: BlogPost = new BlogPost();
  tags!: string;

  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.tags.split(",").map(tag => tag.trim());
    this.blogPost.title = form.value.title;
    this.blogPost.featuredImage = form.value.image;
    this.blogPost.post = form.value.post;
    this.blogPost.category = form.value.category;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = "BTI425 Student";
    this.blogPost.views = 0;
    this._postService.newPost(this.blogPost).subscribe(
      () => {
        this._router.navigate(['/admin']);
      }
    );
  }
}
