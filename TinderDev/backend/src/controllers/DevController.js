const axios = require('axios') // Importando o axios, que facilita a requisição de api's externas
const Dev = require('../model/dev.js')

module.exports = {
    async index(request, response) {
        const { user } = request.headers //busca o usuario logado

        const loggedDev = await Dev.findById(user) // pega todos os dados deste usuario no banco

        const users = await Dev.find({
            $and: [ // usou o operador relacional "e" para todos
                { _id: { $ne: user } }, // ne= not equal - nao tras usuario igual
                { _id: { $nin: loggedDev. likes } }, // nin = not in - nao tras os usuarios que ja deu like/dislike
                { _id: { $nin: loggedDev. dislikes } }
            ]
        }).sort({_id: -1})

        return response.json(users)
    },

    async store(request, response) { // método de criação

        // sempre que for usar o await (faz o programa esperar até a linha ser executada) 
        // em uma função, a função deve ser async

        const { username } = request.body
        // pegar apenas a variavel username dentro do req.body 
        
        const userExists = await Dev.findOne({ user: username })
        // validação para nao deixar inserir o usuario igual

        const githubResponse = await axios.get(`https://api.github.com/users/${username}`)
        // recebe como resposta a api do github que recebe uma variavel que o req vai enviar com o nome

        if (userExists) {
            console.log(`User ${username} already exists.`)
            return response.json(userExists)
        }

        const { name, bio, avatar_url: avatar } = githubResponse.data

        const dev = await Dev.create({
            name,
            user: username,                        
            bio,
            avatar
        })
        
        console.log(`User ${username} created.`)
        return response.json(dev)
    }
}