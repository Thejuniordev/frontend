import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uberlabs-backend.herokuapp.com',
});

export default api;