const express = require("express");
const app = express();

app.use(express.json());

let counter = 0;

app.post("/increment_counter", (req, res) => {
  counter++;
  res.json({ counter: counter });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
