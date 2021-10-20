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
  const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  const handleSettingOperand = (operandInput) => {
    // reset if key pressed when result already shown
    if (isResultDisplayed() && operandInput) {
      clear();
      return;
    }

    // set operands
    if (!isOperator) {
      // prevent adding decimals without numbers for operand1
      if (operandInput === "." && !hasNumbers(operand1)) {
        return;
      }

      // prevent entering or starting with only zeros for operand1
      if (operandInput === "0" && !hasNumbers(operand1)) return;

      setOperand1((prevOp) =>
        hasDecimal(prevOp) && operandInput === "."
          ? prevOp
          : prevOp.concat(operandInput)
      );
    } else if (isOperator) {
      // prevent setting more than one number for square root
      if (isSqrtOperator) return;

      // prevent adding decimals without numbers for operand2
      if (operandInput === "." && !hasNumbers(operand2)) {
        return;
      }

      // prevent entering or starting with only zeros for operand2
      if (operandInput === "0" && !hasNumbers(operand2)) return;

      setOperand2((prevOp) =>
        hasDecimal(prevOp) && operandInput === "."
          ? prevOp
          : prevOp.concat(operandInput)
      );
    }
  };

  return (
    <>
      {numberKeys.map((numKey) => (
        <button
          key={numKey}
          onClick={(e) => handleSettingOperand(e.target.value)}
          value={`${numKey}`}
        >
          {numKey}
        </button>
      ))}
    </>
  );
}

export default NumberKeys;
