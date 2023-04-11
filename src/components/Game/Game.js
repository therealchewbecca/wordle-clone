import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState("running");

	const handleSubmitGuess = (tentativeGuess) => {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess === answer) {
			setGameStatus("won");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	};

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>
			{gameStatus === "won" && (
				<Banner mood="happy" numOfGuesses={guesses.length} answer={answer} />
			)}
			{gameStatus === "lost" && (
				<Banner mood="sad" numOfGuesses={guesses.length} answer={answer} />
			)}
		</>
	);
}

export default Game;
