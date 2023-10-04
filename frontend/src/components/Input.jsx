import React from 'react';
import './Input.css'; // Import your custom CSS file

const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  inputClassName = '',
  isRequired = true,
  placeholder = '',
  value = '',
  onChange = () => {},
  disabled = false,
}) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`custom-input ${inputClassName}`} // Use your custom class name here
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
