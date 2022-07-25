const { Router } = require('express');

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => { // não é obrigatório o uso de parametro na url
    const { name, year, sex } = request.body

    response.json({name, year, sex}) // recebendo a requisição no tipo JSON
});


module.exports = usersRoutes;