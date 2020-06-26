/* eslint-disable no-case-declarations */
import { ADD_TODO, REMOVE_TODO } from '../actionTypes/todo';
import { TodoAction } from '../actionCreators/todo';

type Todo = {
  id: number;
  text: string;
}

type TodosState = Todo[];

const initialState: TodosState = [
  { id: 1, text: 'todo1' },
  { id: 2, text: 'todo2' },
];

function todos(state: TodosState = initialState, action: TodoAction): TodosState {
  switch (action.type) {
  case ADD_TODO:
    const nextId = Math.max(...state.map(todo => todo.id)) + 1;
    return state.concat({
      id: nextId,
      text: action.payload,
    });
  case REMOVE_TODO:
    return state.filter(todo => todo.id !== action.payload);
  default:
    return state;
  }
}

export default todos;