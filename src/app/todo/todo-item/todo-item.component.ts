import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from 'src/app/models/todo.model';
import { deleteTodo, toggleTodo, updateTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo('');
  @ViewChild('editingInput') editingInput: ElementRef | undefined;

  checkCompleted: FormControl = new FormControl();
  textInput: FormControl = new FormControl();
  editing: boolean = false;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe(value => this.store.dispatch(toggleTodo({id: this.todo.id})));

  }

  edit(){
    this.editing = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => this.editingInput?.nativeElement.select(), 1);
  }

  finishEdition(){
    this.editing = false;

    if(this.textInput.invalid || this.textInput.value === this.todo.text){
      return;
    }

    this.store.dispatch(updateTodo({id: this.todo.id, text: this.textInput.value}));
  }

  delete(){
    this.store.dispatch(deleteTodo({id: this.todo.id}));
  }

}
