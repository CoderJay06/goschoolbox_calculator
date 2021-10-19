import React from "react";

function Operators({
  setOperator,
  setEqualSign,
  clear,
  getResult,
  isResultDisplayed
}) {
  const operatorSymbols = ["+", "-", "X", "/", "Clr", "="];

  const handleSettingOperator = (operator) => {
    if (isResultDisplayed() && operator) {
      // reset if key pressed when result already shown
      clear();
    } else {
      // set operator
      if (operator !== "Clr" && operator !== "=") {
        setOperator(operator);
      } else if (operator === "Clr") {
        clear();
        document.querySelector(".display").value = "0";
      } else if (operator === "=") {
        setEqualSign(operator);
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
