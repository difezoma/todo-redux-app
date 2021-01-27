import { ActionReducerMap } from "@ngrx/store";
import { validFilters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { Todo } from "./models/todo.model";
import { todoReducer } from "./todo/todo.reducer";

export interface AppState{
    todos: Todo[],
    filter: validFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}