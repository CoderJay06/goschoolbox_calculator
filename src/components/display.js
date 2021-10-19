import React from "react";

function Display({ operand1, operand2, operator, equalSign, result }) {
  return (
    <input
      className="display"
      value={`${operand1 ? operand1 : "0"} ${operator ? operator : ""} ${
        operand2 ? operand2 : ""
      } ${equalSign ? equalSign : ""} ${result || result === 0 ? result : ""}`}
      disabled
    />
  );
}

export default Display;
