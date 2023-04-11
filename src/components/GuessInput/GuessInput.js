import React, { useState } from "react";

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
	const [tentativeGuess, setTentativeGuess] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // don't reload page
		handleSubmitGuess(tentativeGuess);
		setTentativeGuess(""); // reset so input is blank
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				id="guess-input"
				type="text"
				value={tentativeGuess}
				onChange={(e) => {
					const nextGuess = e.target.value.toUpperCase();
					setTentativeGuess(nextGuess);
				}}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				title="5-Letter Word Guess"
				disabled={gameStatus !== "running"}
			/>
		</form>
	);
};

export default GuessInput;
