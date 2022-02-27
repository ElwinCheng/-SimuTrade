import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:2000'})
//const API = axios.create({ baseURL: 'https://simutrade.herokuapp.com'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req
})


export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)


export const quote = (symbol) => API.get(`/quotes/quote?symbol=${symbol}`)
export const query = (query) => API.get(`/quotes/query?q=${query}`)
export const getDailyHistory = (symbol, period) => API.get(`/quotes/history?symbol=${symbol}&period=${period}`)
export const getCompanyProfile = (symbol) => API.get(`/quotes/profile?symbol=${symbol}`)


export const buyStock = (tradeData) => API.post(`/trade/buy`, tradeData)
export const sellStock = (tradeData) => API.post(`/trade/sell`, tradeData)
export const getTrades = (_id) => API.get(`/trade/trades?_id=${_id}`)


//export const createProfile = (newProfile) => API.post('/profiles', newProfile);


//export const updateUser = (newData) => API.patch