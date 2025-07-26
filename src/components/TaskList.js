import React from "react";
import Task from "./Task";

function TaskList({ tasks = [], onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, idx) => (
        <Task
          key={idx}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask && onDeleteTask(idx)}
        />
      ))}
    </div>
  );
}

export default TaskList;
