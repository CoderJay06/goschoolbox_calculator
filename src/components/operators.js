import React, { useState } from "react";

function Operators({ setOperator, setEqualSign, clear, getResult }) {
  const operatorSymbols = ["+", "-", "X", "/", "Clr", "="];

  const handleSettingOperator = (operator) => {
    console.log(operator);

    console.log(operator);
    if (operator !== "Clr" && operator !== "=") {
      // console.log('op ', operator)
      setOperator(operator);
    } else if (operator === "Clr") {
      console.log("clr!");
      clear();
      document.querySelector(".display").value = "0";
    } else if (operator === "=") {
      setEqualSign(operator);
      getResult();
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
