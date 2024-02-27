import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/about', (req, res) => {
  res.send('diferentes pagina para armar con express')
})

app.listen(3000)
console.log('Escuchando en el puerto' , 3000)