import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/content/BlogPost';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  @Input('post') post !: BlogPost;
  constructor() { }

  ngOnInit(): void {
  }

}
