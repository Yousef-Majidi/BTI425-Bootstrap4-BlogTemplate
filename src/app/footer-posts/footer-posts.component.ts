import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styles: [
  ]
})
export class FooterPostsComponent implements OnInit {
  posts: Array<BlogPost> = [];
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    // populate the posts array with the latest posts using getPosts(1,null,null) then slice the first 3 posts
    this._postService.getPosts("1", null, null).subscribe(posts => {
      this.posts = posts.slice(0, 3);
    });
  }
}
