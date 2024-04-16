const express = require('express')

const router = express.Router()

let listaPessoa = [
    {
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010001"
    },
    {
        "nome": "Paulo",
        "idade": 21,
        "email": "paulo@email.com",
        "telefone": "61900010002"
    }
    
]

// READ -> Buscar todas as pessoas da lista
router.get('/pessoas', (req, res) => {
    res.json(listaPessoa)
})

// READ -> Buscar pessoa pelo IDENTIFICADOR ID
router.get('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoa[index]
    res.json(pessoa)
})

// CREATE -> Cadastrar pessoa
router.post('/pessoas', (req, res) =>{
    const novaPessoa = req.body

    //console.log(novaPessoa)

    estruturaPessoa.length

    const pessoa = {
        id: listaPessoa.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    //console.log(novaPessoa)

    listaPessoa.push(pessoa)
    res.status(201).json({mensagem: "Pessoa cadastrada com sucesso."})

})

// DELETAR -> Excluir pessoa
router.delete('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa => pessoa.id == id)
    listaPessoa.splice(index, 1)
    res.json({mensagem: "Pessoa excluida com sucesso."})
})

// UPDATE -> Atualizar pessoa
router.put('/pessoas/:id', (req, res) =>{
    const id = req.params.id
    const index = listaPessoa.findIndex(pessoa => pessoa.id == id)

    const novosDados = req. body

    const pessoaAlterada = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    listaPessoa[index] = pessoaAlterada

    res.json({mensagem: "Pessoa Atualizada."})
})




module.exports = router