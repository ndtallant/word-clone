import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  if (!value) {
    return (
      <p className="guess">{
        range(5).map(idx => (
          <span key={idx} className="cell"></span>
        ))}
      </p>
    );
  }
  return (
      <p className="guess">{
        value.split('').map((char, idx) => (
          <span key={idx} className="cell">{char}</span>
        ))}
      </p>
  );
}

export default Guess;
