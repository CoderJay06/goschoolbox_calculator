import React, { useState } from "react";
import Display from "../components/display";
import NumberKeys from "../components/numberkeys";
import Operators from "../components/operators";

function Calculator() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [equalSign, setEqualSign] = useState("");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setEqualSign("");
    setResult("");
  };

  const getResult = () => {
    switch (operator) {
      case "+":
        const sum = Number(operand1) + Number(operand2);
        setResult(sum);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <Display
        operand1={operand1}
        operand2={operand2}
        operator={operator}
        equalSign={equalSign}
        result={result}
      />
      <div className="calculator pad">
        <NumberKeys
          setOperand1={setOperand1}
          setOperand2={setOperand2}
          isOperator={operator !== ""}
        />
        <Operators
          setOperator={setOperator}
          setEqualSign={setEqualSign}
          clear={handleClear}
          getResult={getResult}
        />
      </div>
    </div>
  );
}

export default Calculator;
