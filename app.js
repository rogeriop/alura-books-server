const express = require("express");
const rotasLivro = require("./rotas/livro");

const app = express();

app.use("/livros", rotasLivro);

const port = 8000;

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
