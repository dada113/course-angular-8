import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../books';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input()
  book: Book;

  @Output()
  selects = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.selects.emit(this.book);
  }

}
