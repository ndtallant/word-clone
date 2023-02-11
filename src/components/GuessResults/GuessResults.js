import React from "react";
import Guess from "../Guess/";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results, answer }) {
  return (
      <div className="guess-results">
      {
          range(NUM_OF_GUESSES_ALLOWED).map(idx => (
              <Guess key={idx} value={results[idx]} answer={answer} />
          ))
      }
      </div>
  );
}

export default GuessResults;
