import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
      <p className="guess">{
        range(5).map(idx => (
          <span key={idx} className="cell">{
            value ? value[idx]: undefined
          }</span>
        ))}
      </p>
  );
}

export default Guess;
