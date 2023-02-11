import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/";

function GuessResults({ results }) {
  return (
      <div className="guess-results">
      {
          range(6).map((result, idx) => (
              <Guess key={idx} value={"GUESS"} />
          ))
      }
      </div>
  );
}

export default GuessResults;
