// para parar o node no terminal = control+c e aperta enter //


const express = require('express'); // Para importar uma biblioteca
const mongoose = require('mongoose'); // Para importar a ferramenta do mongo db atlas
const cors = require('cors'); // permite que seja acessada por qualquer endereço


const routes = require('./routes.js') // Para importar arquivo que esta na mesma pasta usar ./

const httpserver = express(); // Cria um servidor http(que recebe requisicoes e retorna respostas), utilizando express
const server = require('http').Server(httpserver); //extrai servidor http de dentro do express
const io = require ('socket.io')(server);  // para conseguir revener requisições web socket também

const connectedUsers = { };
    

io.on('connection', socket => { // toda vez que alguem conectar usando web socket recebe um socket
   const { user } = socket.handshake.query; // pega o id do usuario da query do frontend
   
   console.log(user, socket.id); // pega o id do usuario e o id do socket dele
   
   connectedUsers[user] = socket.id; // pega o id do usuario conectado

    
})

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-eu753.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true 
});

httpserver.use((req, res, next) => { // esse middleware passa para os Controllers, os ids dos usuarios
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

httpserver.use(cors());
httpserver.use(express.json()); // Adiciona o entendimento de json nas requisições

httpserver.use(routes); // Adicionando um modulo para o server

server.listen(3333); // Indica qual porta o servidor vai acessar, para criar o endereço web

// utilizando no terminal yarn dev, ele ja inicia o servidor e qualquer alteração vai automatico
