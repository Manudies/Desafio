import React, { useState } from 'react';

const Textarea = ({ label, rows, cols, placeholder, value, onChange }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const App = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Textarea Component Example</h1>
      <Textarea
        label="Enter your text:"
        rows="10"
        cols="50"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p>Current Text: {text}</p>
    </div>
  );
};

export default App;