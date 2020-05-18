const express = require('express');
const monsoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Conectar com mongodb
monsoose.connect('mongodb+srv://omnistack:omnistack@cluster0-eu753.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, // esses 2 parametros tiram os erros
});

// Valido para todas as rotas da aplicação
app.use(cors()); // libera o acesso externo para qualquer lugar
app.use(express.json());
app.use(routes);

// define a porta da app
app.listen(3333);