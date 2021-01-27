import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Action] create', props<{text: string}>() );

export const toggleTodo = createAction('[Action] toggle', props<{id: number}>() );

export const updateTodo = createAction('[Action] update', props<{id: number, text: string}>() );

export const deleteTodo = createAction('[Action] delete', props<{id: number}>() );

export const toggleAllTodo = createAction('[Action] toggle all', props<{completed: boolean}>() );

export const clearCompletedTodo = createAction('[Action] clear completed todo');