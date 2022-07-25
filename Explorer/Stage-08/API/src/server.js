const express = require('express'); // importando o express

const app = express(); // inicializando o express

app.get('/:id/:user', (request, response) => { // método GET
    const { id, user } = request.params // desestruturando o ID e USER do request

    response.send(`ID = ${id}. USER = ${user}`)
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

