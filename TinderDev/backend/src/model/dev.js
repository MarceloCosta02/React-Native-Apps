const { Schema, model } = require('mongoose'); // Importa o mongoose

const DevSchema = new Schema({
    name:{
        type: String,
        required: true // indica se é obrigatorio ou nao
    },
    user:{
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{ // Cria um vetor e armazena o id dos desenvolvedores
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
},  
    {
    timestamps: true // cria uma coluna de forma automatica chamada createdAt em cada registro que salvar
                     // e cria o updateAt que armazena a data de alteração do ultimo registro

    }) // Armazena qual a estrutura do BD para armazenar um dev la dentro

module.exports = model('Dev', DevSchema)
// para exportar o nosso model, criando uma função