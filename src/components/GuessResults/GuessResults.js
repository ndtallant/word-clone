import React from "react";

function GuessResults({ results }) {
  return (
      <div className="guess-results">
      {
          results &&
          results.map(result => (
              <p key={Math.random()} className="guess">{result}</p>
          ))
      }
      </div>
  );
}

export default GuessResults;
