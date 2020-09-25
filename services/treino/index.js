const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app
  .get('/treino', (req, res) => {
    res.status(200).send({
      message: 'Obter treino'
    });
  })
  .post('/treino',  (req, res) => {
    res.status(200).send({
      message: 'Adicionar treino'
    });
  })
  .put('/treino', (req, res) => {
    res.status(200).send({
      message: 'Atualizar treino'
    });
  })
  .delete('/treino', (req, res) => {
    res.status(200).send({
      message: 'deletar treino'
    });
  });

app.listen(port, () => {
  console.log(`Ouvindo em http://localhost:${port}`)
})