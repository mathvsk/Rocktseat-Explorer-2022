const express = require('express'); // importando o express

const app = express(); // inicializando o express
app.use(express.json()); // definindo qual o padrão sera utilizado para o envio de requisições

app.post('/post', (request, response) => { // não é obrigatório o uso de parametro na url
    const { name, year, sex } = request.body

    response.json({name, year, sex}) // recebendo a requisição no tipo JSON
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

