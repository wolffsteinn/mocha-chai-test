'use client';

import React, { useState } from 'react';

function Subtract() {
  const [subtract, setSubtract] = useState(0);
  const [isValuePresent, setIsValuePresent] = useState(true);
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();

  const handleSubtract = () => {
    setIsValuePresent(true);
    // ensure that the values are numbers
    if (firstValue && secondValue) {
      setSubtract(Number(firstValue) + Number(secondValue));
    } else {
      setIsValuePresent(false);
      setSubtract(0);
    }
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
        <h4>{isValuePresent ? subtract : 'THERE ARE NO VALUES??'}</h4>
      </div>
    </div>
  );
}

export default Subtract;
