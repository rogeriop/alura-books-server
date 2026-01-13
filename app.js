const express = require("express");
const rotasLivro = require("./rotas/livro");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({origin: "*"})); 

app.use("/livros", rotasLivro);

const port = 8000;

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
