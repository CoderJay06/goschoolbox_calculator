import React from "react";
import Display from "../components/display";
import NumberKeys from "../components/numberkeys";
import Operators from "../components/operators";

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <div className="calculator pad">
        <NumberKeys />
        <Operators />
      </div>
    </div>
  );
}

export default Calculator;
