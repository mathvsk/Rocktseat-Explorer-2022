const express = require('express'); // importando o express

const routes = require('./routes');

const app = express(); // inicializando o express
app.use(express.json()); // definindo qual o padrão sera utilizado para o envio de requisições

app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

