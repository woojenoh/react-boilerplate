import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { addTodo, removeTodo } from '../../redux/actionCreators/todo';
import useInput from '../../hooks/useInput';
import './index.scss';

interface Props {
  
}

const MyPage: React.FC<Props> = () => {
  const todos = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const [todoValue, todoInput] = useInput({ type: 'text', className: 'input', placeholder: '', required: true });

  return (
    <div>
      {todoInput}
      <button onClick={() => dispatch(addTodo(todoValue))}>Submit</button>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default MyPage;
