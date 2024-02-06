'use client';

import React, { useState } from 'react';

function Subtract() {
  const [subtract, setSubtract] = useState(0);
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();

  const handleSubtract = () => {
    // ensure that the values are numbers
    setSubtract(Number(firstValue) + Number(secondValue));
  };

  const handleFirstValueChange = (e) => {
    setFirstValue(e.target.value);
  };

  const handleSecondValueChange = (e) => {
    setSecondValue(e.target.value);
  };

  return (
    <div>
      <h2>What would you like to subtract?</h2>
      <div className="flex">
        <input type="number" placeholder="put number here" min="0" onChange={handleFirstValueChange} />
        <div> - </div>
        <input type="number" placeholder="put number here" min="0" onChange={handleSecondValueChange} />
      </div>
      <button type="button" onClick={handleSubtract}>SUBTRACT!!</button>
      <div>
        <h3>And your result is...</h3>
        <h4>{subtract}</h4>
      </div>
    </div>
  );
}

export default Subtract;
