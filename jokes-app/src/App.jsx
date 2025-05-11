import { useState, useEffect } from 'react'
import './App.css'
import JokeList from "./JokeList.jsx"
import RandomJoke from './RandomJoke.jsx'
import { BrowserRouter } from "react-router-dom"

export default function App() {
  const [jokes, setJokes] = useState([])
  const [randomJokeId, setRandomJokeId] = useState(null)
  const [view, setView] = useState("jokes")

async function fetchJokes() {
    try {
      const response = await ("http://localhost:3000/api/mockJokes");
      const data = await response.json();
      setJokes(data.jokes);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error)
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (

    <BrowserRouter>

      <div >
        <div >
          <h1>Welcome to LaughScript!</h1>
        </div>
      </div>
      <div>
        <p className="introduction">
          Thanks for visiting LaughScript, the app for coders to console.log('😂')
        </p>
      </div>

      <div className="app-container">
        <>

          <JokeList 
            jokes={jokes}
            setJokes={setJokes}
            setRandomJokeId={setRandomJokeId}
            setView={setView}
            fetchJokes={fetchJokes}
          />

          <RandomJoke randomJokeId={randomJokeId} setRandomJokeId={setRandomJokeId} setView={setView} />

        </>

      </div>

    </BrowserRouter>
  )
};

