import React from "react";

function Guess() {
  const [guess, setGuess] = React.useState('');

  function submitGuess(event) {
      const thisGuess = guess;
      if (thisGuess.length !== 5) {
          window.alert('Guess must be 5 chars!');
          return;
      }
      event.preventDefault();
      console.log(guess);
      setGuess('');
  }
  return (
    <>
    <form onSubmit={submitGuess} class="guess-input-wrapper">
      <label for="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess}
        onChange={event => {
            setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
    </>);
}

export default Guess;
