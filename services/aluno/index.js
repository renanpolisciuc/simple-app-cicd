const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app
  .get('/aluno', (req, res) => {
    res.status(200).send({
      message: 'Obter aluno'
    });
  })
  .post('/aluno',  (req, res) => {
    res.status(200).send({
      message: 'Adicionar aluno'
    });
  })
  .put('/aluno', (req, res) => {
    res.status(200).send({
      message: 'Atualizar aluno'
    });
  })
  .delete('/aluno', (req, res) => {
    res.status(200).send({
      message: 'deletar aluno'
    });
  });

app.listen(port, () => {
  console.log(`Ouvindo em http://localhost:${port}`)
})