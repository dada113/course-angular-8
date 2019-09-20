import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor( 
    private readonly service: BookService,
  ){}

  ngOnInit() {
    this.books = this.service.getBooks();
  }

  onSelect(book: Book){
    this.selectedBook=book;
  }

  onSave(book: Book){
    this.service.storeBook(book);
    this.ngOnInit();
    }
}
