const express = require('express')
const app = express()

// Middlware
app.use(express.json())

//Rotas
const pessoas = require('./routes/pessoa')
app.use(pessoa)
//comentario



// Porta
app.listen(3000, () =>{
    console.log("Aplicação crud pessoas rodando em http://localhost:3000")
})