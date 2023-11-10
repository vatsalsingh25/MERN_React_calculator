import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input));
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('0');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
      setOutput(input.slice(0, -1));
    } else {
      setInput(input + value);
      setOutput(input + value);
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <div className="output">{output}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('*')}>x</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={() => handleClick('⌫')}>⌫</button>
            <button onClick={() => handleClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('C')} className="clear">Clear</button>
            <button onClick={() => handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

