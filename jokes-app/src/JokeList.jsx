import React from "react";

export default function JokeList({ jokes, setRandomJokeId, setView }) {
  if (!jokes || jokes.length === 0) {
    return <p>Loading jokes...</p>;
  }

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    setRandomJokeId(randomJoke.id);
    setView("random");
  };

  return (
    <div className="joke-grid">
      {jokes.map((joke) => (
        <div key={joke.id} className="joke-card">
          <p>{joke.text}</p>
        </div>
      ))}
      <button onClick={handleRandomClick}>View Random</button>
    </div>
  );
}
