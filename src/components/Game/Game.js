import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm  from '../GuessForm/';
import GuessResults  from '../GuessResults/';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {


  const [results, setResults] = React.useState([]);
  return (
      <>
      <GuessResults results={results}/>
      <GuessForm results={results} setResults={setResults}/>
      </>
  );
}

export default Game;
