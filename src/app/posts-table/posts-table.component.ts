import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/content/BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styles: [
  ]
})
export class PostsTableComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe(
      (data: Array<BlogPost>) => {
        this.blogPosts = data;
      }
    );
  }

  rowClicked(event: any, id: string) {
    this._router.navigate(['admin/post/' + id]);
  }

}
