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

  const renderOperatorSymbols = () =>
    operatorSymbols.map((symbol) => (
      <button
        key={symbol}
        onClick={(e) => handleSettingOperator(e.target.value)}
        value={`${symbol}`}
      >
        {symbol}
      </button>
    ));

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
      // check for clear or equal sign key press
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

  return <>{renderOperatorSymbols()}</>;
}

export default Operators;
