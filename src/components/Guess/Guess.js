import React from "react";

function Guess({ value }) {
    console.log(value.split(''));
  return (
      <p className="guess">
        {
          value.split('').map((char, idx) => (
            <span key={idx} className="cell">{char}</span>
          ))
        }
      </p>
  );
    
}

export default Guess;
