import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { input, clear, deleteLast, evaluate } from './calculatorSlice';
import Button from './button';

const Calculator = () => {
  const value = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();

  const handleClick = (val) => {
    if (val === 'C') return dispatch(clear());
    if (val === 'DEL') return dispatch(deleteLast());
    if (val === '=') return dispatch(evaluate());

    dispatch(input(val));
  };

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C','DEL'
  ];

  return (
    <div style={{ width: '250px', margin: '50px auto' }}>
      {/* Display */}
      <div
        style={{
          height: '60px',
          background: '#222',
          color: '#fff',
          fontSize: '24px',
          textAlign: 'right',
          padding: '10px',
        }}
      >
        {value}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;