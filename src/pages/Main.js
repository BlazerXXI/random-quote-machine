import { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
	const quotes = [
		{
			quote: "Be yourself; everyone else is already taken.",
			author: "Oscar Wilde",
		},
		{
			quote:
				"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
			author: "Albert Einstein",
		},
		{
			quote: "The only thing I know is that I know nothing.",
			author: "Socrates",
		},
		{
			quote: "The only true wisdom is in knowing you know nothing.",
			author: "Socrates",
		},
		{
			quote: "Believe you can and you're halfway there.",
			author: "Theodore Roosevelt",
		},
		{
			quote:
				"Success is not final, failure is not fatal: It is the courage to continue that counts.",
			author: "Winston Churchill",
		},
		{
			quote:
				"The greatest glory in living lies not in never falling, but in rising every time we fall.",
			author: "Nelson Mandela",
		},
		{
			quote: "Strive not to be a success, but rather to be of value.",
			author: "Albert Einstein",
		},
		{
			quote:
				"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
			author: "Aristotle",
		},
		{ quote: "The best way out is always through.", author: "Robert Frost" },
		{
			quote: "Keep your eyes on the stars, and your feet on the ground.",
			author: "Theodore Roosevelt",
		},
		{
			quote: "Be the change that you wish to see in the world.",
			author: "Mahatma Gandhi",
		},
		{
			quote: "The only thing we have to fear is fear itself — and spiders.",
			author: "Franklin D. Roosevelt",
		},
	];
	const [quote, setQuote] = useState(
		quotes[Math.floor(Math.random() * quotes.length)]
	);
	const getRandomQuote = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	};

	useEffect(() => {
		const tweetQuote = document.getElementById("tweet-quote");
		const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			`"${quote.quote}" - ${quote.author}`
		)}`;
		tweetQuote.setAttribute("href", tweetUrl);

		const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

		document.body.style.backgroundColor = randomColor;
		document.getElementById("new-quote").style.backgroundColor = randomColor;
		document.getElementById("text").style.color = randomColor;
		document.getElementById("author").style.color = randomColor;
	}, [quote]);

	return (
		<div>
			<div id="quote-box">
				<div id="text">
					<i class="bi bi-quote" style={{ marginRight: "10px", fontSize: "28px" }}></i>
					{quote.quote}
				</div>
				<div id="author">- {quote.author}</div>
				<div id="buttons">
					<a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
						<i className="bi bi-twitter-x"></i>
					</a>
					<button type="button" onClick={() => getRandomQuote()} id="new-quote">
						New Quote
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
