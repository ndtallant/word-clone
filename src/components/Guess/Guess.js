import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ status, letter }) {
  return (<span className={`cell ${status}`}>{letter}</span>);
}

function Guess({ value, answer }) {
  const chars = checkGuess(value, answer);
  return (
      <p className="guess">{
        range(5).map(idx => (
          <Cell 
            key={idx} 
            status={chars ? chars[idx].status : ''}
            letter={chars ? chars[idx].letter : undefined}
          />
        ))}
      </p>
  );
}

export default Guess;
