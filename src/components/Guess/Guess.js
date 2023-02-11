import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ status, letter }) {
  return (<span className={`cell ${status}`}>{letter}</span>);
}

function Guess({ value, answer }) {
  if (!value) {
    return (
      <p className="guess">{
        range(5).map(idx => (
          <Cell key={idx} status={''} letter={undefined} />
        ))}
      </p>);
  }
  const chars = checkGuess(value, answer);
  return (
      <p className="guess">{
        chars.map((char, idx)=> (
          <Cell key={idx} status={char.status} letter={char.letter} />
        ))}
      </p>
  );
}

export default Guess;
