//import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const api = create({
    baseURL:'http://44.232.133.164:8080',
});

// todas as requisições que forem feitas, se houver um token armazenado no storage, ele envia o token junto
/*api.addAsyncRequestTransform(request => async () => {
    const token = 
        await AsyncStorage.getItem('@CodeApi:token');

        if(token)
        request.headers['Authorization'] = `Bearer ${token}`;
});*/

api.addResponseTransform(response => {
    if(!response.ok) throw response;
});

export default api;




// usando axios
/*
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://44.232.133.164:8080'
    // usar comando adb reverse tcp:3333 tcp:3333 ou ip da maquina
})

export default api

*/