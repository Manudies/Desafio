import React, { useState } from 'react';
import './Textbox.css';

const Textbox = ({ label, placeholder, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  let textboxClass = 'textbox';
  if (isFocused) {
    textboxClass += ' textbox-focus';
  } else if (error) {
    textboxClass += ' textbox-error';
  }

  return (
    <div className="textbox-container">
      <label className="textbox-label">{label}</label>
      <input type="text" className={textboxClass} placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}/>
      {error && <span className="textbox-error-message">{error}</span>}
    </div>
  );
};

export default Textbox;
