import React from "react";

function NumberKeys({
  setOperand1,
  setOperand2,
  isOperator,
  isResultDisplayed,
  clear
}) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleSettingOperand = (num) => {
    if (isResultDisplayed() && num) {
      // reset if key pressed when result already shown
      clear();
    } else {
      // set operand
      if (!isOperator) {
        setOperand1((prevOp) => prevOp.concat(num));
      } else if (isOperator) {
        setOperand2((prevOp) => prevOp.concat(num));
      }
    }
  };

  return (
    <>
      {numbers.map((num) => (
        <button
          key={num}
          onClick={(e) => handleSettingOperand(e.target.value)}
          value={`${num}`}
        >
          {num}
        </button>
      ))}
    </>
  );
}

export default NumberKeys;
