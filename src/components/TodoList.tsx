import axios from 'axios';
import React from 'react';
import { todo } from '../types/todo';
import Todo from './Todo';

interface TodoListProp {
  todos: todo[];
}

const apiUrl = import.meta.env.VITE_API_URL;


// eslint-disable-next-line react-refresh/only-export-components
export const fetchTodos = async (): Promise<{ todos: todo[] }> => {
  const { data } = await axios.get(`${apiUrl}/todos`);
  return data; // This data has todos, total, skip, limit
};

const TodoList: React.FC<TodoListProp> = ({ todos }) => {
 

  return (
    <div className="flex flex-wrap gap-8">
      {todos?.map((todoItem) => (
        <Todo key={todoItem.id} color="red" todo={todoItem} />
      ))}
    </div>
  );
};

export default TodoList;
