import React from "react";

// CustomInput component
const CustomInput = ({ type, placeholder, onClick }) => {
  // Inline styles for the input and button
  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    width: '80%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    width: '47%',
    marginBottom: '25px',
    fontSize: '16px',
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      {type === 'button' ? (
        <button onClick={onClick} style={buttonStyle}>Submit</button>
      ) : (
        <input type={type} placeholder={placeholder} style={inputStyle} />
      )}
    </div>
  );
};

export default CustomInput;
