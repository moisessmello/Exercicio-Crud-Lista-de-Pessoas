const express = require('express')
const router = express.Router()

// Lista mockada de pessoas
let estruturaPessoa = [
    {
        id: 1,
        nome: "Moises",
        idade: 30,
        email: "moises@email.com",
        telefone: 61900010002
    },
    {
        id: 2,
        nome: "Mateus",
        idade: 41,
        email: "mateus@email.com",
        telefone: 61800010002
    },
    {
        id: 3,
        nome: "Jose",
        idade: 25,
        email: "jose@email.com",
        telefone: 61990010002
    }
]

// Middlware de validação
// Validar se a pessoa existe
function validarPessoas(req, res, next) {
    const id = req.params.id
    const pessoa = estruturaPessoa.find(pessoa => pessoa.id == id)
    if (pessoa) {
        req.pessoa = pessoa
        next()
    } else {
        res.status(404).json({ mensagem: "Pessoa não encontrada!" })
    }
}

// Validar os atributos do corpo
function validarAtributos(req, res, next) {
    const dados = req.body
    if (!dados.nome || !dados.idade || !dados.email || !dados.telefone) {
        res.status(400).json({ mensagem: "Nome, idade, email e telefone são obrigatórios!" })
    } else {
        next()
    }
}

// READ -> Buscar todas as pessoas
router.get('/pessoasComValidacao', (req, res) => {
    res.json(estruturaPessoa)
})

// READ -> Buscar pessoa pelo identificador ID
router.get('/pessoasComValidacao/:id', validarPessoas, (req, res) => {
    res.json(req.pessoa)
})

// CREATE -> Cadastrar pessoas
router.post('/pessoasComValidacao', validarAtributos, (req, res) => {
    const dados = req.body
    const pessoa = {
        id: Math.round(Math.random() * 1000),
        nome: dados.nome,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone
    }
    estruturaPessoa.push(pessoa)
    res.status(201).json({
        mensagem: "Pessoa cadastrada com sucesso!",
        pessoa
    })
})

// DELETE -> Excluir pessoa pelo id
router.delete('/pessoasComValidacao/:id', validarPessoas, (req, res) => {
    const id = req.params.id
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    estruturaPessoa.splice(index, 1)
    res.status(200).json({ mensagem: "Pessoa excluída com sucesso!" })
})

// UPDATE -> Atualizar pessoas
router.put('/pessoasComValidacao/:id', validarAtributos, validarPessoas, (req, res) => {
    const id = req.params.id
    const novosDados = req.body
    const index = estruturaPessoa.findIndex(pessoa => pessoa.id == id)
    const pessoa = {
        id: Number(id),
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }
    estruturaPessoa[index] = pessoa
    res.status(200).json({ mensagem: "Pessoa alterada com sucesso!" })
})

module.exports = router