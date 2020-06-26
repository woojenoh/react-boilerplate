import { ADD_TODO, REMOVE_TODO } from '../actionTypes/todo';

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});