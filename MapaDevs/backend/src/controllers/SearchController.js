const Dev = require('../models/Dev');    
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        // Buscar todos os devs num raio de 10km
        // Filtrar por tecnologia
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray, // $in é um Operador logico, ele valida se há alguem com a tecnologia mandada 
            },
            location: { // com o $near eu consigo encontrar objetos perto de uma localizacao
                $near:{
                    $geometry:{ // Usa como reference nosso ponto com a latitude e a longitude
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },              
            },
        });

        return response.json({devs});
    }
}

