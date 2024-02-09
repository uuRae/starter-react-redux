const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const quotes = [
  {
    quote: "All problems are illusions of the mind.",
    author: "Eckhart Tolle",
  },
  {
    quote: "Do it with passion, or not at all.",
    author: "Rosa Nouchette Carey",
  },
  {
    quote:
      "Success is nothing more than a few simple disciplines practiced every day.",
    author: "Jim Rohn",
  },
  {
    quote:
      "Death walks faster than the wind and never returns what he has taken.",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Nothing can bring you peace but yourself.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "If you want to know what God thinks about money just look at the people He gives it to.",
    author: "Alexander Pope",
  },
];
app.get("/api/quote", (req, res) => {
  res.send({ data: quotes[Math.floor(Math.random() * quotes.length)] });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
