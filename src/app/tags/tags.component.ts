import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Array<string> = [];
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    // populate the tags array using getTags() from post.service.ts
    this._postService.getTags().subscribe(data => this.tags = data);
  }

}
