import React from "react";

/*
  - show numbers and symbols user presses as the value
  - display: operand1 | operator | operand2 = result
*/

function Display({ operand1, operand2, operator, equalSign, result }) {
  return (
    <input
      className="display"
      value={`${operand1 ? operand1 : "0"} ${operator ? operator : ""} ${
        operand2 ? operand2 : ""
      } ${equalSign ? equalSign : ""} ${result ? result : ""}`}
      disabled
    />
  );
}

export default Display;
