import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.chess.com/pub'
});

export default api;