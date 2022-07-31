require('express-async-errors');

const database = require('./database/sqlite')

const AppError = require('./utils/AppError');

const express = require('express'); // importando o express

const routes = require('./routes');

const app = express(); // inicializando o express
app.use(express.json()); // definindo qual o padrão sera utilizado para o envio de requisições

app.use(routes);

database();

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

