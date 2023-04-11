import React from "react";

function Banner({ answer, mood, numOfGuesses }) {
	const happyMood = mood === "happy";

	return (
		<div className={happyMood ? "banner happy" : "banner sad"}>
			<p>
				{happyMood ? (
					<>
						<strong>Congratulations!</strong> Got it in{" "}
						<strong>
							{numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
						</strong>
						.
					</>
				) : (
					<>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</>
				)}
			</p>
		</div>
	);
}

export default Banner;
