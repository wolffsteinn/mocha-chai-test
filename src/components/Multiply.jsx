'use client';

import React, { useState } from 'react';

function Multiply() {
  const [isValuePresent, setIsValuePresent] = useState(true);
  const [multiply, setMultiply] = useState(0);
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();

  const handleMultiply = () => {
    setIsValuePresent(true);
    // ensure that the values are numbers
    if (firstValue && secondValue) {
      setMultiply(Number(firstValue) + Number(secondValue));
    } else {
      setIsValuePresent(false);
      setMultiply(0);
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
      <h2>What would you like to multiply?</h2>
      <div className="flex">
        <input type="number" placeholder="put number here" min="0" onChange={handleFirstValueChange} />
        <div> * </div>
        <input type="number" placeholder="put number here" min="0" onChange={handleSecondValueChange} />
      </div>
      <button type="button" onClick={handleMultiply}>MULTIPLY!!</button>
      <div>
        <h3>And your result is...</h3>
        <h4>{isValuePresent ? multiply : 'THERE ARE NO VALUES???'}</h4>
      </div>
    </div>
  );
}

export default Multiply;
