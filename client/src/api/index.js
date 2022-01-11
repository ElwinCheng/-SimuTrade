import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:2000'})

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
export const getDailyHistory = (symbol) => API.get(`/quotes/history?symbol=${symbol}`)


export const createProfile = (newProfile) => API.post('/profiles', newProfile);


//export const updateUser = (newData) => API.patch