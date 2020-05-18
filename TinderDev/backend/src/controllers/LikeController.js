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

      if(targetDev.likes.includes(loggerDev._id)){
         const loggerSocket = req.connectedUsers[user]; // pega o id do usuario conectado
         const targetSocket = req.connectedUsers[devId]; // pega o id do usuario que recebeu o like
         
         if(loggerSocket){ // se o usuario estiver conectado
            req.io.to(loggerSocket).emit('match', targetDev) // usando o to, mostra pra quem eu quero enviar a info, e envia a mensagem de match para o outro
            
            }

        if(targetSocket){ // se o usuario estiver conectado
             req.io.to(targetSocket).emit('match', loggerDev) // usando o to, mostra pra quem eu quero enviar a info, e envia a mensagem de match para o outro
                
             }  
        }

      loggerDev.likes.push(targetDev._id) // o push() adiciona uma nova info no array

      await loggerDev.save(); // salva as info do push

      return res.json(loggerDev);
    }
};