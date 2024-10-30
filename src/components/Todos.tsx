import { SetStateAction, useState } from 'react';
import { PiSortAscendingThin } from "react-icons/pi";
import { VscAdd } from "react-icons/vsc";
import TodoList, { fetchTodos } from "./TodoList"; // Assuming TodoList accepts props to display todos
import { useQuery } from "react-query";


const Todos = () => {
  const { data: todos, isLoading, error } = useQuery("todos", fetchTodos);
  
  // State to track the selected filter
  const [filter, setFilter] = useState("all");

  // Loading state
  if (isLoading) return <p>Loading...</p>;
  
  // Error state
  if (error instanceof Error) return <p>Error fetching todos: {error.message}</p>;

  // Filtered todos based on the selected filter
  const filteredTodos = () => {
    if (!todos) return [];

    switch (filter) {
      case "all":
        return todos.todos; // All tasks
      case "todo":
        return todos.todos.filter(todo => !todo.completed);
      case "in-progress":
        return todos.todos.filter(todo => todo.completed === false); // Adjust based on your data structure
      case "completed":
        return todos.todos.filter(todo => todo.completed === true);
      default:
        return todos.todos;
    }
  };

  const handleFilterChange = (newFilter: SetStateAction<string>) => {
    setFilter(newFilter);
  };

  return (
    <div className="overflow-y-auto h-full">
      <div className="bg-white rounded-xl flex justify-between items-center mx-10 my-4 gap-4 px-4">
        <div className="flex gap-4">
          <div
            className={`flex items-center border-b-4 gap-4 p-4 cursor-pointer ${filter === "all" ? "border-violet-700 text-violet-700" : "border-white text-gray-400"}`}
            onClick={() => handleFilterChange("all")}
          >
            <p>All Tasks</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">{todos?.todos.length}</p>
          </div>
          <div
            className={`flex items-center gap-4 cursor-pointer ${filter === "todo" ? "border-b-4 border-violet-700 text-violet-700" : "border-white text-gray-400"}`}
            onClick={() => handleFilterChange("todo")}
          >
            <p>To do</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">{todos?.todos.filter(todo => !todo.completed).length}</p>
          </div>
          <div
            className={`flex items-center gap-4 cursor-pointer ${filter === "in-progress" ? "border-b-4 border-violet-700 text-violet-700" : "border-white text-gray-400"}`}
            onClick={() => handleFilterChange("in-progress")}
          >
            <p>In Progress</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">{todos?.todos.filter(todo => todo.completed === false).length}</p>
          </div>
          <div
            className={`flex items-center gap-4 cursor-pointer ${filter === "completed" ? "border-b-4 border-violet-700 text-violet-700" : "border-white text-gray-400"}`}
            onClick={() => handleFilterChange("completed")}
          >
            <p>Completed</p>
            <p className="bg-gray-200 px-2 py-1 text-xs rounded-lg">{todos?.todos.filter(todo => todo.completed === true).length}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 py-2 border-2 border-slate-100 text-slate-200 px-2 rounded-xl">
            <PiSortAscendingThin className="text-slate-600 w-6 h-6" />
            <p className="text-slate-600">Filter & Sort</p>
          </div>
          <div className="flex items-center gap-2 py-2 border-2 border-slate-100 text-slate-200 px-2 rounded-xl">
            <VscAdd className="text-slate-600 w-4 h-4" />
            <p className="text-slate-600">New Task</p>
          </div>
        </div>
      </div>
      <div className="px-10 py-4 flex flex-wrap gap-4">
        <TodoList todos={filteredTodos()} /> {/* Pass the filtered todos to TodoList */}
      </div>
    </div>
  );
};

export default Todos;
