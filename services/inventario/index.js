const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app
  .get('/inventario', (req, res) => {
    res.status(200).send({
      message: 'Obter inventario'
    });
  })
  .post('/inventario',  (req, res) => {
    res.status(200).send({
      message: 'Adicionar inventario'
    });
  })
  .put('/inventario', (req, res) => {
    res.status(200).send({
      message: 'Atualizar inventario'
    });
  })
  .delete('/inventario', (req, res) => {
    res.status(200).send({
      message: 'deletar inventario'
    });
  });

app.listen(port, () => {
  console.log(`Ouvindo em http://localhost:${port}`)
})