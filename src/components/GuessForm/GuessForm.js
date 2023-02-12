import React from "react";

function GuessForm({ gameState, results, submitGuess }) {
  const [guess, setGuess] = React.useState('');

  function submitGuessForm(event) {
      event.preventDefault();
      const thisGuess = guess;
      if (thisGuess.length !== 5) {
          window.alert('Guess must be 5 chars :)');
          return;
      }
      submitGuess(thisGuess);
      setGuess('');
  }
  return (
    <>
    <form onSubmit={submitGuessForm} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        disabled={gameState !== 'playing'}
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

export default GuessForm;
