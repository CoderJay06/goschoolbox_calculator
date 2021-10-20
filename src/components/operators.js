import React from "react";

function Operators({
  operator,
  setOperator,
  setEqualSign,
  setIsSqrtOperator,
  isSqrtOperator,
  clear,
  getResult,
  isResultDisplayed,
  hasAnOperand,
  hasBothOperands
}) {
  const operatorSymbols = ["+", "-", "X", "/", "√", "Clr", "="];

  const handleSettingOperator = (operatorInput) => {
    // reset if key pressed when result already shown
    if (isResultDisplayed() && operatorInput) {
      clear();
    } else {
      // set operator if hasn't been set and number is shown
      if (operator === "" && hasAnOperand()) {
        if (
          operatorInput !== "Clr" &&
          operatorInput !== "=" &&
          operatorInput !== "√"
        ) {
          setOperator(operatorInput);
        } else if (operatorInput === "√") {
          setOperator(operatorInput);
          setIsSqrtOperator((prevState) => !prevState);
        }
      }

      if (operatorInput === "Clr") {
        clear();
        document.querySelector(".display").value = "0";
      } else if (
        operatorInput === "=" &&
        (hasBothOperands() || isSqrtOperator)
      ) {
        setEqualSign(operatorInput);
        getResult();
      }
    }
  };

  return (
    <>
      {operatorSymbols.map((symbol) => (
        <button
          key={symbol}
          onClick={(e) => handleSettingOperator(e.target.value)}
          value={`${symbol}`}
        >
          {symbol}
        </button>
      ))}
    </>
  );
}

export default Operators;
