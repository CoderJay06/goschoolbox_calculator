import React from "react";

function Display({ operand1, operand2, operator, equalSign, result }) {
  const calculatorDisplay = `
    ${operand1 ? operand1 : "0"} 
    ${operator ? operator : ""} 
    ${operand2 ? operand2 : ""} 
    ${equalSign ? equalSign : ""} 
    ${result || result === 0 ? result : ""}`
    .replace(/ +/g, " ")
    .trim();

  return <input className="display" value={calculatorDisplay} disabled />;
}

export default Display;
