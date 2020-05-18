const express = require('express');
const routes = express.Router(); // Cria um objeto especifico para rotas 

const DevController = require('./controllers/DevController'); // Importa o nosso controller
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


/*
routes.get('/', (req,res) => { // utilizando a / ele nao cai em nenhum método, e sim no inicial, recebendo a requisição e a resposta

    //return res.send('Falae vitao'); // Retorna a resposta do servidor ao usuario
    return res.json({ message:`Hello ${req.query.name}`}); //Para receber o parametro no navegador utilizando no caso http://localhost:3333/?name=Marcelo
});
*/


// Cadastrar alguma informação dentro da app usar o post, que está chamando nosso controller de criação
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes; // Para exportar o objeto para nosso server
