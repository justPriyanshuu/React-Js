import React from 'react';

export const TaskList = ({ tasks, onToggle ,onDelete}) => {
  if (!tasks.length) return <p>No Tasks Yet!</p>;

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
            {task.text}
            {task.completed ? '✅' : ''}
            <button onClick={()=>onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
