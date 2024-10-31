import { SetStateAction, useState } from 'react';
import { PiSortAscendingThin } from 'react-icons/pi';
import { VscAdd } from 'react-icons/vsc';
import TodoList, { fetchTodos } from './TodoList';
import { useQuery } from 'react-query';

import SkeletonTodo from './SkeletonTodo';

const Todos = () => {
  const { data: todos, isLoading, error } = useQuery('todos', fetchTodos);

  const [filter, setFilter] = useState('all');

  if (error instanceof Error)
    return <p>Error fetching todos: {error.message}</p>;

  const filteredTodos = () => {
    if (!todos) return [];

    switch (filter) {
      case 'all':
        return todos.todos;
      case 'todo':
        return todos.todos.filter((todo) => !todo.completed);
      case 'in-progress':
        return todos.todos.filter((todo) => todo.completed === false);
      case 'completed':
        return todos.todos.filter((todo) => todo.completed === true);
      default:
        return todos.todos;
    }
  };

  const handleFilterChange = (newFilter: SetStateAction<string>) => {
    setFilter(newFilter);
  };

  return (
    <div className="overflow-y-auto h-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl flex justify-between items-center mx-10 my-4 gap-4 px-4">
        <div className="flex gap-4">
          <div
            className={`flex items-center border-b-4 gap-4 p-4 cursor-pointer  ${filter === 'all' ? 'border-violet-700 text-violet-700 dark:text-violet-400' : 'border-none text-gray-400'}`}
            onClick={() => handleFilterChange('all')}
          >
            <p className="">All Tasks</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">
              {todos?.todos.length}
            </p>
          </div>
          <div
            className={`flex items-center gap-4 cursor-pointer ${filter === 'todo' ? 'border-b-4 border-violet-700 text-violet-700' : 'border-white text-gray-400'}`}
            onClick={() => handleFilterChange('todo')}
          >
            <p>To do</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">
              {todos?.todos.filter((todo) => !todo.completed).length}
            </p>
          </div>
          <div
            className={`flex items-center gap-4 cursor-pointer ${filter === 'in-progress' ? 'border-b-4 border-violet-700 text-violet-700' : 'border-white text-gray-400'}`}
            onClick={() => handleFilterChange('in-progress')}
          >
            <p>In Progress</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">
              {todos?.todos.filter((todo) => todo.completed === false).length}
            </p>
          </div>
          <div
            className={`flex items-center gap-4 cursor-pointer ${filter === 'completed' ? 'border-b-4 border-violet-700 text-violet-700' : 'border-white text-gray-400'}`}
            onClick={() => handleFilterChange('completed')}
          >
            <p>Completed</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">
              {todos?.todos.filter((todo) => todo.completed === true).length}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 py-2 border-2 border-slate-100 dark:border-slate-600 text-slate-200 px-2 rounded-xl">
            <PiSortAscendingThin className="text-slate-600 dark:text-slate-300 w-6 h-6" />
            <p className="text-slate-600 dark:text-slate-300">Filter & Sort</p>
          </div>
          <div className="flex items-center gap-2 py-2 border-2 border-slate-100 dark:border-slate-600 text-slate-200 px-2 rounded-xl">
            <VscAdd className="text-slate-600 w-4 h-4 dark:text-slate-300" />
            <p className="text-slate-600  dark:text-slate-300">New Task</p>
          </div>
        </div>
      </div>
      <div className="px-10 py-4 flex flex-wrap gap-4">
        {isLoading &&
          Array.from({ length: 6 }, (_, index) => <SkeletonTodo key={index} />)}
        <TodoList todos={filteredTodos()} />{' '}
      </div>
    </div>
  );
};

export default Todos;
