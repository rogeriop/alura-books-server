const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Alô, Mundo");
});

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
