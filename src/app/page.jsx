'use client';

import React, { useState } from 'react';
import Addition from '@/components/Addition';
import Subtract from '@/components/Subtraction';
import Multiply from '@/components/Multiply';
import Divide from '@/components/Divide';

function Page() {
  const [isAdd, setIsAdd] = useState(false);
  const [isSubtract, setIsSubtract] = useState(false);
  const [isMultiply, setIsMultiply] = useState(false);
  const [isDivide, setIsDivide] = useState(false);

  const handleAddition = () => {
    setIsAdd((prev) => !prev);
    setIsSubtract(false);
    setIsMultiply(false);
    setIsDivide(false);
  };

  const handleSubtract = () => {
    setIsSubtract((prev) => !prev);
    setIsAdd(false);
    setIsMultiply(false);
    setIsDivide(false);
  };

  const handleMultiply = () => {
    setIsMultiply((prev) => !prev);
    setIsAdd(false);
    setIsSubtract(false);
    setIsDivide(false);
  };

  const handleDivide = () => {
    setIsDivide((prev) => !prev);
    setIsAdd(false);
    setIsMultiply(false);
    setIsSubtract(false);
  };

  return (
    <>
      <h2>Would you like to...</h2>
      <div>
        <button type="button" onClick={handleAddition}>Add</button>
        <button type="button" onClick={handleSubtract}>Subtract</button>
        <button type="button" onClick={handleMultiply}>Multiply</button>
        <button type="button" onClick={handleDivide}>Divide</button>
      </div>
      {isAdd ? <Addition /> : ''}
      {isSubtract ? <Subtract /> : ''}
      {isMultiply ? <Multiply /> : ''}
      {isDivide ? <Divide /> : ''}
    </>
  );
}

export default Page;
