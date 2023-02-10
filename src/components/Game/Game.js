import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess  from '../Guess/';
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
      <Guess results={results} setResults={setResults}/>
      </>
  );
}

export default Game;
