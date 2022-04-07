import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styles: [
  ]
})
export class EditPostComponent implements OnInit {
  blogPost!: BlogPost;
  tags!: string;

  constructor(private _postService: PostService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._postService.getPostById(this._route.snapshot.params['id']).subscribe(
      (data: BlogPost) => {
        this.blogPost = data;
        this.tags = data.tags.toString();
      }
    );
  }

  onSubmit(form: NgForm): void {
    this.blogPost.tags = this.tags.split(',');
    this.blogPost.title = form.value.title;
    this.blogPost.featuredImage = form.value.image;
    this.blogPost.post = form.value.post;
    this.blogPost.category = form.value.category;
    this._postService.updatePost(this.blogPost).subscribe(
      () => {
        this._router.navigate(['/admin']);
      }
    );
  }
}
