import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { createTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  inputText = new FormControl('', Validators.required);

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => console.log(todos));
  }

  addItem(){

    if(!this.inputText.valid){
      return;
    }

    this.store.dispatch(createTodo({ text: this.inputText.value }));
    this.inputText.reset();
  }

}
