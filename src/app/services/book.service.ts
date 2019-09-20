import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Book, BOOKS } from '../books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly books= BOOKS;

  getBooks(): Book[]{
    return this.books;
  }

  storeBook(newBook: Book){
      const pos = this.books.findIndex(b => b.id === newBook.id);
      if(pos >= 0){
        this.books[pos]=newBook;
       }
   }

  constructor() { }
}

