import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { clearCompletedTodo, createTodo, deleteTodo, toggleAllTodo, toggleTodo, updateTodo } from './todo.actions';
 
export const initialState: Todo[] = [new Todo('Do the dishes'), new Todo('Wash the car')];
 
const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text } ) => [...state, new Todo(text)]),
  on(toggleTodo, (state, { id }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }else {
        return todo;
      }
    });
  }),
  on(updateTodo, (state, { id, text }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
      }else{
        return todo;
      }
    })
  }),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAllTodo, (state, { completed }) => {
    return state.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    })
  }),
  on(clearCompletedTodo, (state) => state.filter(todo => !todo.completed))
);
 
export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}