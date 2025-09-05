import { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
	const [quote, setQuote] = useState({ quote: "", author: "" });
	const [isLoading, setIsLoading] = useState(false);
	const [fade, setFade] = useState(false);

	const getRandomColor = () =>
		`#${Math.floor(Math.random() * 16777215).toString(16)}`;

	const getRandomQuote = async () => {
		setIsLoading(true);
		setFade(false);
		try {
			const response = await fetch("http://api.quotable.io/random");
			if (!response.ok) {
				throw new Error("Failed to fetch quote");
			}
			const data = await response.json();
			setQuote({ quote: data.content, author: data.author });
		} catch (error) {
			console.error("Error fetching quote:", error);
			setQuote({
				quote: "Be yourself; everyone else is already taken.",
				author: "Oscar Wilde",
			});
		} finally {
			setIsLoading(false);
			setFade(true);
		}
	};

	useEffect(() => {
		getRandomQuote();
	}, []);

	useEffect(() => {
		const tweetQuote = document.getElementById("tweet-quote");
		const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			`"${quote.quote}" - ${quote.author}`
		)}`;
		tweetQuote.setAttribute("href", tweetUrl);

		const randomColor = getRandomColor();
		document.body.style.backgroundColor = randomColor;
		document.getElementById("new-quote").style.backgroundColor = randomColor;
		document.getElementById("text").style.color = randomColor;
		document.getElementById("author").style.color = randomColor;
	}, [quote]);

	return (
		<div>
			<div id="quote-box">
				<div
					id="text"
					className={`quote-text ${fade ? "fade-in" : "fade-out"}`}
				>
					<i
						className="bi bi-quote"
						style={{ marginRight: "10px", fontSize: "28px" }}
					></i>
					{isLoading ? "Loading..." : quote.quote}
				</div>
				<div
					id="author"
					className={`quote-author ${fade ? "fade-in" : "fade-out"}`}
				>
					- {isLoading ? "..." : quote.author}
				</div>
				<div id="buttons">
					<a
						id="tweet-quote"
						target="_blank"
						href="https://twitter.com/intent/tweet"
						rel="noopener noreferrer"
					>
						<i className="bi bi-twitter-x"></i>
					</a>
					<button
						type="button"
						onClick={getRandomQuote}
						id="new-quote"
						disabled={isLoading}
					>
						{isLoading ? "Fetching..." : "New Quote"}
					</button>
				</div>
			</div>
			<p id="creator">
				Created by: <a href="https://github.com/blazerxxi">blazerxxi</a>
			</p>
		</div>
	);
};

export default Main;
