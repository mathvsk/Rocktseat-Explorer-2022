// importação feita para ter acesso as variaveis de ambiente
require('dotenv/config');

require('express-async-errors');
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError');
const uploadConfig = require('./configs/upload');

const cors = require('cors');
const express = require('express'); // importando o express
const routes = require('./routes');

migrationsRun();

const app = express(); // inicializando o express
app.use(cors())
app.use(express.json()); // definindo qual o padrão sera utilizado para o envio de requisições

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

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

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

