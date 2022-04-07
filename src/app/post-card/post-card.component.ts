import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/content/BlogPost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styles: []
})
export class PostCardComponent implements OnInit {
  @Input('post') post!: BlogPost
  constructor() { }

  ngOnInit(): void { }

}
