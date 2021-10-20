import React from "react";

function NumberKeys({
  operand1,
  operand2,
  setOperand1,
  setOperand2,
  isOperator,
  isSqrtOperator,
  hasDecimal,
  hasNumbers,
  isResultDisplayed,
  clear
}) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  const handleSettingOperand = (num) => {
    if (isResultDisplayed() && num) {
      // reset if key pressed when result already shown
      clear();
      return;
    }

    if (!isOperator) {
      // prevent adding decimals without numbers for operand1
      if (num === "." && !hasNumbers(operand1)) {
        return;
      }

      // prevent entering or starting with only zeros for operand1
      if (num === "0" && !hasNumbers(operand1)) return;

      setOperand1((prevOp) =>
        hasDecimal(prevOp) && num === "." ? prevOp : prevOp.concat(num)
      );
    } else if (isOperator) {
      // prevent adding decimals without numbers for operand2
      if (num === "." && !hasNumbers(operand2)) {
        return;
      }

      // prevent entering or starting with only zeros for operand2
      if (num === "0" && !hasNumbers(operand2)) return;

      setOperand2((prevOp) =>
        hasDecimal(prevOp) && num === "." ? prevOp : prevOp.concat(num)
      );
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
