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
    if (isResultDisplayed() && operatorInput) {
      // reset if key pressed when result already shown
      clear();
    } else {
      // set operator

      if (operator === "" && hasAnOperand()) {
        if (operatorInput !== "Clr" && operatorInput !== "=") {
          setOperator(operatorInput);
        } else if (operatorInput === "√") {
          setOperator(operatorInput);
          setIsSqrtOperator((prevState) => !prevState);
          return;
        }
      }
      console.log(isSqrtOperator);
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
