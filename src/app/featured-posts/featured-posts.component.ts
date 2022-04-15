import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styles: [
  ]
})
export class FeaturedPostsComponent implements OnInit {
  featuredPosts: Array<BlogPost> = [];
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.featuredPosts = this._postService.getFeaturedPosts();
  }

}
