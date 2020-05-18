const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router(); // Recebe a api de rotas do express

// Tipos de parametros do express
// Query Params: utilizado no método GET - request.query (filtros, ordenação, paginacao..)
// Route Params: utilizado no put e no delete - request.params (identificar um recurso na alteração ou na remoção)
// Body: utilizado no post e no put - request.body - (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index);

// endereço principal sem rotas com requisição e respostaa
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

// Exporta as rotas daqui de dentro
module.exports = routes;