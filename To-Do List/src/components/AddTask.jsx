import React, { useState } from 'react';

export const AddTask = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task for today..."
        onChange={handleChange}
        value={text}
      />
      <button>Add Task</button>
    </div>
  );
};
