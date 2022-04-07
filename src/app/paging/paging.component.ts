import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styles: [
  ]
})
export class PagingComponent implements OnInit {
  // accepts a single property, page
  @Input() page!: number;

  // outputs the event "newPage" which will contain the new page number obtained by clicking on one of the left or right page item buttons
  @Output() newPage = new EventEmitter<number>();

  prevPage() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }
  }

  nextPage() {
    this.newPage.emit(this.page + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
