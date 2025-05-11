import express from "express"
import jokes from "./mockJokes.js";

const app = express()

app.route("/mockJokes/random").get((req, res) => {
    if (!jokes || jokes.length === 0) {
        return res.status(404).json({ error: "Joke not found" }) 
     }
     const randomJoke = Math.floor(Math.random() * jokes.length);
     const joke = jokes[randomJoke];
     
     res.status(200).json(joke);
    
});

app.route("/mockJokes/:id").get(( req, res ) => {
const id = parseInt(req.params.id); 
const joke = jokes.find(jo => jo.id === id)

if (joke) {
    res.status(200).json(joke);
} else {
    res.status(404).json({ error: "Joke not found"})
}
});

app.route("/mockJokes").get(( req, res ) => {
    res.send(jokes)
})

export default app