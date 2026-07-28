import axios from 'axios'

// conectando front com back 

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api 