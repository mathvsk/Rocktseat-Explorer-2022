const express = require('express'); // importando o express

const app = express(); // inicializando o express

app.get('/', (request, response) => { // método GET
    response.send("Hello World");
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

