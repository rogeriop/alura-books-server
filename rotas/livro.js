const { Router } = require("express");
const { getLivros } = require("../controladores/livro.js");

const router = Router();

router.get("/",  getLivros);

router.post('/', (req, res) => {
  res.send('Recebido um POST');
});

router.patch('/', (req, res) => {
  res.send('Recebido um PATCH');
});

router.delete('/', (req, res) => {
  res.send('Recebido um DELETE');
});

module.exports = router;