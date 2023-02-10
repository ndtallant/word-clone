import React from "react";

function GuessResults({ guessResults }) {
  return (
      <div className="guess-results">
      {
          guessResults.map(({ label, id }) => (
              <p key={id} className="guess">{label}</p>
          ))
      }
      </div>
  );
}

export default GuessResults;
