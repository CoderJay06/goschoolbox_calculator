import React, { useState } from "react";
import Display from "../components/display";
import NumberKeys from "../components/numberkeys";
import Operators from "../components/operators";

function Calculator() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [isSqrtOperator, setIsSqrtOperator] = useState(false);
  const [equalSign, setEqualSign] = useState("");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setIsSqrtOperator((prevState) => !prevState);
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
      case "√":
        const squareRoot = Math.sqrt(Number(operand1));
        setResult(squareRoot);
        break;
      default:
        break;
    }
  };

  const hasDecimal = (operand) => {
    return operand.includes(".");
  };

  const hasNumbers = (value) => {
    return /[0-9]/.test(value);
  };

  const hasAnOperand = () => {
    return operand1 !== "" || operand2 !== "";
  };

  const hasBothOperands = () => {
    return operand1 !== "" && operand2 !== "";
  };

  const isResultDisplayed = () => {
    return result !== "";
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
          operand1={operand1}
          operand2={operand2}
          setOperand1={setOperand1}
          setOperand2={setOperand2}
          isOperator={operator !== ""}
          isSqrtOperator={isSqrtOperator}
          hasDecimal={hasDecimal}
          hasNumbers={hasNumbers}
          isResultDisplayed={isResultDisplayed}
          clear={handleClear}
        />
        <Operators
          operator={operator}
          setOperator={setOperator}
          setEqualSign={setEqualSign}
          setIsSqrtOperator={setIsSqrtOperator}
          isSqrtOperator={isSqrtOperator}
          clear={handleClear}
          getResult={getResult}
          isResultDisplayed={isResultDisplayed}
          hasAnOperand={hasAnOperand}
          hasBothOperands={hasBothOperands}
        />
      </div>
    </div>
  );
}

export default Calculator;
