import * as React from 'react';
import useTodoState from './useTodoState';
import useInputState from './useInputState';

const Todo = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  const { value, reset, onChange } = useInputState('');

  reset();

  addTodo('test0');
  addTodo('test1');
  addTodo('test2');

  deleteTodo(0);

  return (
    <div>
      {JSON.stringify(todos)}

      <input
        placeholder="Add todo"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Todo;
