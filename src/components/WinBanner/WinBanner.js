import React from "react";
import Banner from "../Banner/";

function WinBanner({ numGuesses }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations! </strong>
        Got it in <strong>{
          `${numGuesses} ${numGuesses === 1 ?  "guess" : "guesses"}`
        }</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
