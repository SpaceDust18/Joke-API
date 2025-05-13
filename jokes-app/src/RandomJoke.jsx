import React, { useState, useEffect } from "react";

export default function RandomJoke({ randomJokeId, setRandomJokeId, setView }) {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    if (!randomJokeId) return;

    async function fetchJoke() {
      try {
        const response = await fetch(`http://localhost:3000/mockJokes/${randomJokeId}`);
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.error("Error fetching joke", error);
      }
    }

    fetchJoke();
  }, [randomJokeId]);

  const handleBack = () => {
    setRandomJokeId(null);
    setView("jokes");
  };

  if (!joke) return <p>Loading joke...</p>;

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke.text}</p>
      <button onClick={handleBack}>Back to Joke List</button>
    </div>
  );
}
