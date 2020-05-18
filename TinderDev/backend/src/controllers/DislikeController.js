const Dev = require('../model/dev');

module.exports = {
    async store(req,res){
      const { devId } = req.params;
      const { user } = req.headers;

      // buscando no banco de dados as instancias dessas variaveis
      // tendo acesso a todos os dados deles

      const loggerDev = await Dev.findById(user);
      const targetDev = await Dev.findById(devId);

      if(!targetDev){ // se o Dev não existir, retorna um erro
          return res.status(400).json({ error: 'Dev not exists'});
      }

  
      loggerDev.dislikes.push(targetDev._id) // o push() adiciona uma nova info no array

      await loggerDev.save(); // salva as info do push

      return res.json(loggerDev);
    }
};