import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState('');

  function submitGuess(event) {
      event.preventDefault();
      const thisGuess = guess;
      if (thisGuess.length !== 5) {
          window.alert('Guess must be 5 chars :)');
          return;
      }
      console.log({ guess });
      setGuess('');
  }
  return (
    <>
    <form onSubmit={submitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        minLength={5}
        maxLength={5}
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={event => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
        }}
      />
    </form>
    </>);
}

export default Guess;
