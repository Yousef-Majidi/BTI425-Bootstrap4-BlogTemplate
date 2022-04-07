import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    // populate the categories array using getCategories() from post.service.ts
    this._postService.getCategories().subscribe(data => this.categories = data);
  }

}
