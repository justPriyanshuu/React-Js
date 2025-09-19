import React, { useState } from 'react';

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task for today..."
        onChange={handleChange}
        value={text}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};
