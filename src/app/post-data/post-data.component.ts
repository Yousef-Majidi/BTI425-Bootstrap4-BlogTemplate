import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styles: []
})
export class PostDataComponent implements OnInit {
  querySub: any;
  post !: any;
  commentName!: string;
  commentText!: string;

  constructor(private _postService: PostService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this._route.params.subscribe(params => {
      // get post by id params['id'] and store the result in this.post
      this._postService.getPostById(params['id']).subscribe(data => this.post = data);
    })
  }

  ngOnDestroy() {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }

  submitComment(form: NgForm) {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });

    this._postService.updatePost(this.post).subscribe(() => {
      this.commentName = '';
      this.commentText = '';
      form.reset();
    });
  }

}
