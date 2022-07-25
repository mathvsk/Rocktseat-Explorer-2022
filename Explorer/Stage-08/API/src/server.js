const express = require('express'); // importando o express

const app = express(); // inicializando o express

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

