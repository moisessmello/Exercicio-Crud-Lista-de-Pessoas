const express = require('express')
const app = express()

// Middlware
app.use(express.json())

//Rotas
const pessoasComValidacao = require('./routes/pessoas')
app.use(pessoasComValidacao)








// Porta
app.listen(3000, () =>{
    console.log("Aplicação rodando em http://localhost:3000")
})