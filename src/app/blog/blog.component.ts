import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {
  blogPosts: any;
  page: number = 1;
  tag: string | null = null;
  category: string | null = null;
  querySub: any;
  constructor(private _postService: PostService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this._route.queryParams.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = null;
      } else {
        this.tag = null;
      }

      if (params['category']) {
        this.category = params['category'];
        this.tag = null;
      } else {
        this.category = null;
      }

      this.getPage(+params['page'] || 1);
    });
  }

  getPage(page: number) {
    // get all of the blog posts using the value of page, this.tag and this.category
    this.querySub = this._postService.getPosts(page.toString(), this.tag, this.category).subscribe(data => {
      // if the length of data is > 0, then set this.blogPosts to data
      if (data.length > 0) {
        this.blogPosts = data;
        this.page = page;
      }
    });
  }

  ngOnDestroy() {
    this.querySub.unsubscribe();
  }
}
