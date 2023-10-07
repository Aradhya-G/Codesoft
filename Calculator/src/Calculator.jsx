import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const liveScreen = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  const changeTheme = () => {
    // Implement your theme change logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700">
      <div className="bg-gray-100 p-8 rounded shadow-md w-64">
        <h1 className="text-2xl font-semibold text-center mb-4">Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            name="result"
            id="result"
            placeholder="Result"
            readOnly
            value={result}
            className="border p-2 w-full text-right"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '/'].map((btn) => (
            <button
              key={btn}
              className="button"
              onClick={() => liveScreen(btn)}
            >
              {btn}
            </button>
          ))}
          <button className="bg-green-500 col-span-4 hover:bg-green-700 text-white font-bold py-2 rounded" onClick={calculate}>
            =
          </button>
        </div>
        <div className="mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 w-full rounded" onClick={clearResult}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
