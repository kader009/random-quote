import { useEffect, useState } from 'react';
import './Module.app.css';

const quotes = [
  {
  "text": "You can observe a lot just by watching.",
  "author": "Yogi Berra"
  },
  {
  "text": "A house divided against itself cannot stand.",
  "author": "Abraham Lincoln"
  },
  {
  "text": "Difficulties increase the nearer we get to the goal.",
  "author": "Johann Wolfgang von Goethe"
  },
  {
  "text": "Fate is in your hands and no one elses",
  "author": "Byron Pulsifer"
  },
  {
  "text": "Be the chief but never the lord.",
  "author": "Lao Tzu"
  },
  {
  "text": "Nothing happens unless first we dream.",
  "author": "Carl Sandburg"
  },
  {
  "text": "Well begun is half done.",
  "author": "Aristotle"
  },
  {
  "text": "Life is a learning experience, only if you learn.",
  "author": "Yogi Berra"
  },
  {
  "text": "Self-complacency is fatal to progress.",
  "author": "Margaret Sangster"
  },
  {
  "text": "Peace comes from within. Do not seek it without.",
  "author": "Buddha"
  },
  {
  "text": "What you give is what you get.",
  "author": "Byron Pulsifer"
  },
  {
  "text": "We can only learn to love by loving.",
  "author": "Iris Murdoch"
  },
  {
  "text": "Life is change. Growth is optional. Choose wisely.",
  "author": "Karen Clark"
  },
  {
  "text": "You'll see it when you believe it.",
  "author": "Wayne Dyer"
  },
  {
  "text": "Today is the tomorrow we worried about yesterday.",
  "author": "Byron Pulsifer"
  },
  {
  "text": "It's easier to see the mistakes on someone else's paper.",
  "author": "William Shakespeare"
  },
  {
  "text": "Every man dies. Not every man really lives.",
  "author": "Donald Trump"
  },
  {
  "text": "To lead people walk behind them.",
  "author": "Lao Tzu"
  },
  {
  "text": "Having nothing, nothing can he lose.",
  "author": "William Shakespeare"
  },
  {
  "text": "Trouble is only opportunity in work clothes.",
  "author": "Henry J. Kaiser"
  },
  {
  "text": "A rolling stone gathers no moss.",
  "author": "Publilius Syrus"
  },
  {
  "text": "Ideas are the beginning points of all fortunes.",
  "author": "Napoleon Hill"
  },
  {
  "text": "Everything in life is luck.",
  "author": "Donald Trump"
  },
];

function App() {
  const [quote, setquote] = useState([])

  useEffect(() => {
    handleClick()
  },[])

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setquote(quotes[randomIndex]);
  };
  return (
    <div className="container">
      <div className='card'>
      <h1>Random Quote Generator</h1>
      <p>{quote.text}</p>
      <small>{quote.author}</small>
      <br /> <br />
      <button onClick={handleClick}>Random</button>
      </div>
    </div>
  );
}

export default App;
