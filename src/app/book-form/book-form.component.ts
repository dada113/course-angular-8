import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Book } from '../books';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnChanges {
  form: FormGroup;

  @Input()
  book: Book;

  @Output()
  saves = new EventEmitter<Book>();

  constructor(
    private readonly builder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form=this.builder.group({
      id:0,
      name:['',Validators.required],
      author:['',Validators.required],
      published: '',
      available: false,
      coverUrl: ''
    });
  }

  ngOnChanges(): void{
    if(this.form){
    this.form.reset();
    this.form.patchValue(this.book);
    }
  }

   onSubmit(){
     this.saves.emit(this.form.value);
   }
}
