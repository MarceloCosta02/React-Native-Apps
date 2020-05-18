const axios = require('axios');
const Dev = require('../models/Dev');    
const parseStringAsArray = require('../utils/parseStringAsArray');

// funções de um controller: index, show, store, update, destroy

module.exports = {
    // Busca todos os devs
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response){
        // Com a desestruturação {} é possivel buscar só aquilo q vc quer e nao tudo
        const { github_username, techs, latitude, longitude } = request.body;
        
        // Verifica se ele encontra alguem com esse usuario
        let dev = await Dev.findOne({ github_username });

        if(!dev){
            // Utilizar a aspas com craze permite adicionar variaveis em string
            // Usar o async la encima e o await para esperar a api responder
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            // Caso o name não exista, fazendo name = login ele recebe o login
            const { name = login, avatar_url, bio} = apiResponse.data;
        
            // Usando o .map ele percorre o aray e pra cada info desse vetor e remove os espaços usando o trim
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            // Cria no MongoDB a informação do dev
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
         }
       
    
        return response.json(dev);
    }
}