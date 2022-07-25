const express = require('express'); // importando o express

const app = express(); // inicializando o express

app.get('/route/:id/:user', (request, response) => { // método GET
    const { id, user } = request.params // desestruturando o ID e USER do request

    response.send(`ID = ${id}. USER = ${user}`)
});

app.get('/query', (request, response) => { // não é obrigatório o uso de parametro na url
    const {idade, user } = request.query // desestruturando o IDADE e USER do query params

    response.send(`ID = ${idade}. USER = ${user}`)
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

