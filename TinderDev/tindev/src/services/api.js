import axios from 'axios'


const api = axios.create({
    baseURL: 'http://10.44.28.71:3333'
    // usar comando adb reverse tcp:3333 tcp:3333 ou ip da maquina
})

export default api