import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { clearCompletedTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilters = 'all';
  filters: validFilters[] = ['all', 'completed', 'pending'];

  pendingTodos: number = 0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    /* this.store.select('filter').subscribe(filter => {
      this.currentFilter = filter;
    }); */

    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter( todo => !todo.completed).length;
    })
  }

  changeFilter( filter: validFilters ){
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted(){
    this.store.dispatch(clearCompletedTodo());
  }

}
