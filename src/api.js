import axios from 'axios'

const api = axios.create({
    baseURL: 'https://core.hivelocity.net/api/v2',
    headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
        Accept: 'application/json',
    },
})

export default api
