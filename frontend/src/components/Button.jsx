import React from 'react';
import './Button.css'; // Import your custom CSS file

const Button = ({
  label = 'Button',
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`} // Use your custom class name here
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
