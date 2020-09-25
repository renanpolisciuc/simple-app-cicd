const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app
  .get('/professor', (req, res) => {
    res.status(200).send({
      message: 'Obter professor'
    });
  })
  .post('/professor',  (req, res) => {
    res.status(200).send({
      message: 'Adicionar professor'
    });
  })
  .put('/professor', (req, res) => {
    res.status(200).send({
      message: 'Atualizar professor'
    });
  })
  .delete('/professor', (req, res) => {
    res.status(200).send({
      message: 'deletar professor'
    });
  });

app.listen(port, () => {
  console.log(`Ouvindo em http://localhost:${port}`)
})