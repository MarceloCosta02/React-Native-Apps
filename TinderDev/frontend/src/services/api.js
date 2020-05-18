import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333" // Variavel recebe a url padrão para o metodo de criação    
});

export default api;