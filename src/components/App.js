// removed duplicate import
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


import React, { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  const handleDeleteTask = (index) => {
    // Find the index in the filtered list, map to the index in the full list
    const filteredIndexes = tasks
      .map((task, i) => ({ task, i }))
      .filter(({ task }) =>
        selectedCategory === "All" ? true : task.category === selectedCategory
      )
      .map(({ i }) => i);
    const realIndex = filteredIndexes[index];
    setTasks((prev) => prev.filter((_, i) => i !== realIndex));
  };

  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
