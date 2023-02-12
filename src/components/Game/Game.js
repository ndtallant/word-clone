import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm  from '../GuessForm/';
import GuessResults  from '../GuessResults/';
import WinBanner from '../WinBanner/';
import LoseBanner from '../LoseBanner/';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // 'playing', 'won', or 'lost'
  const [gameState, setGameState] = React.useState('playing');
  const [results, setResults] = React.useState([]);

  function submitGuess(currentResult) {
    const nextResults = [...results, currentResult];
    setResults(nextResults);
    if (currentResult.toUpperCase() === answer) {
      setGameState('won');
    } else if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }
  return (
      <>
      <GuessResults results={results} answer={answer}/>
      <GuessForm gameState={gameState} results={results} submitGuess={submitGuess}/>
      {gameState === 'won' && <WinBanner numGuesses={results.length}/>}
      {gameState === 'lost' && <LoseBanner answer={answer}/>}
      </>
  );
}

export default Game;
