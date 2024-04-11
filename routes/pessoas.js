const express = require('express')
const router = express.Router()

// Lista mockada
let  estruturaPessoa = [
    {
        id: 1,
        nome: "Moises",
        idade: 30,
        email: "moises@email.com",
        telefone: 6199999-8888
    },
    {
        id: 2,
        nome: "Maria",
        idade: 19,
        email: "Maria@email.com",
        telefone: 61898888-9999
    },
    {
        id: 3,
        nome: "Joaquim",
        idade: 45,
        email: "joaquim@email.com",
        telefone: 6299555-4444
    },
    {
      id: 4,
        nome: "Francisca",
        idade: 27,
        email: "francisca@email.com",
        telefone: 3898555-1111
    }
]

// READ -> Buscar todas as pessoas da lista
router.get('/pessoas', (req, res) => {
    res.json(estruturaPessoa)
})

// READ -> Buscar pessoa pelo IDENTIFICADOR ID
router.get('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    const pessoa = estruturaPessoa[index]
    res.json(pessoa)
})

// CREATE -> Cadastrar pessoa
router.post('/pessoas', (req, res) =>{
    const novaPessoa = req.body

    //console.log(novaPessoa)

    estruturaPessoa.length

    const pessoa = {
        id: estruturaPessoa.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    //console.log(novaPessoa)

    estruturaPessoa.push(pessoa)
    res.status(201).json({mensagem: "Pessoa cadastrada com sucesso!"})

})

// DELETAR -> Excluir pessoa
router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    estruturaPessoa.splice(index, 1)
    res.json({mensagem: "Pessoa excluida com sucesso!"})
})

// UPDATE -> Atualizar pessoa
router.put('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)

    const novosDados = req. body

    const pessoaAlterada = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    estruturaPessoa[index] = pessoaAlterada

    res.json({mensagem: "Pessoa atualizada com sucesso!"})
})




module.exports = router