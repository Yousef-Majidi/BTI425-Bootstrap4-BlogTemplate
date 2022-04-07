import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  querySub: any;
  post !: any;
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

}
