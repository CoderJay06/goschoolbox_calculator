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
      case "-":
        const difference = Number(operand1) - Number(operand2);
        setResult(difference);
        break;
      case "X":
        const product = Number(operand1) * Number(operand2);
        setResult(product);
        break;
      case "/":
        const quotient = Math.floor(Number(operand1) / Number(operand2));
        setResult(quotient);
        break;
      default:
        break;
    }
  };

  const isResultDisplayed = () => {
    console.log("r ", result);
    return result !== "";
  };

  return (
    <div className="calculator">
      {console.log(result !== "")}
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
          isResultDisplayed={isResultDisplayed}
          clear={handleClear}
        />
        <Operators
          setOperator={setOperator}
          setEqualSign={setEqualSign}
          clear={handleClear}
          getResult={getResult}
          isResultDisplayed={isResultDisplayed}
        />
      </div>
    </div>
  );
}

export default Calculator;
