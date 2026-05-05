import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      style={{
        width: '50px',
        height: '50px',
        margin: '5px',
        fontSize: '18px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;