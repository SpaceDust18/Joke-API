import { useState, useEffect } from 'react';
import './App.css';
import JokeList from "./JokeList.jsx";
import RandomJoke from './RandomJoke.jsx';

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [randomJokeId, setRandomJokeId] = useState(null);
  const [view, setView] = useState("jokes");

  

  async function fetchJokes() {
    try {
      const res = await fetch("http://localhost:3000/mockJokes");
      const data = await res.json()
      setJokes(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to LaughScript!</h1>
      </div>
      <div>
        <p className="introduction">
          Thanks for visiting LaughScript, the app for coders to console.log('😂')
        </p>
      </div>

      <div className="app-container">
        {view === "jokes" && 
        <JokeList 
        jokes={jokes} 
        setJokes={setJokes} 
        setRandomJokeId={setRandomJokeId} 
        setView={setView} />}


        <RandomJoke
          randomJokeId={randomJokeId}
          setRandomJokeId={setRandomJokeId}
          setView={setView}
        />
      </div>
    </>
  );
}
