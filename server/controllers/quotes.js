import dotenv from 'dotenv'
import axios from 'axios'
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY
const FINNHUB_API = axios.create({ baseURL: 'https://finnhub.io/api/v1'})

export const getQuote = async (req, res) => {
	try {
		const { symbol } = req.query
		const { data } = await FINNHUB_API.get(`/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`)
		return res.status(200).json({ data })

	} catch (error) {
		res.status(500).json({ message: "Something went wrong"})
	}
}

export const getQuery = async (req, res) => {
	try {
		const { q } = req.query
		const { data } = await FINNHUB_API.get(`/search?q=${q}&token=${FINNHUB_API_KEY}`)
		res.status(200).json({ data })
	} catch (error) {
		res.status(500).json({ message: "Something went wrong"})
	}
}