import React, { useState, useEffect } from "react";

export default function RandomJoke({
    randomJokeId,
    setRandomJokeId,
    setView
}) {
    const [joke, setJoke] = useState()

    useEffect(() => {
        async function fetchJoke() {
            try {
                const response = await fetch(`http://localhost:3000/api/mockJokes/${randomJokeId}`
                );
                const data = await response.json();
                setJoke(data.joke)
            } catch (error) {
                console.error("Error fetching joke", error);
            }
        }
        fetchJoke();
    }, [randomJokeId]);
}

useEffect(() => {
    if (!randomJokeId) return;
    async function fetchJoke() {
        try {
            const response = await fetch(`http://localhost:3000/api/mockJokes/${randomJokeId}`);
            const data = await response.json();
            setJoke(data.joke);
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

if (!joke) return null;

return (
    <div>
        <h2>Random Joke</h2>
        <p>{joke}</p>
        <button onClick={handleBack}>Back to Joke List</button>
    </div>
);

