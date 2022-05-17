import dotenv from 'dotenv'
import axios from 'axios'
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY
const FINNHUB_API = axios.create({ baseURL: 'https://finnhub.io/api/v1'})
const ALPHAVANTAGE_API = axios.create({ baseURL: 'https://alphavantage.co'})
const ALPHAVANTAGE_API_KEY = process.env.ALPHAVANTAGE_API_KEY

export const getCompanyProfile = async(req, res) => {
	try {
		const { symbol } = req.query
		const { data } = await FINNHUB_API.get(`/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`)
		return res.status(200).json({ data })

	} catch (error) {
		console.log(error)
		res.status(500).json({ message: "Something went wrong"})
	}
}

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
		const { data } = await FINNHUB_API.get(`/stock/symbol?exchange=US&token=${FINNHUB_API_KEY}`)
		res.status(200).json({ data })
	} catch (error) {
		res.status(500).json({ message: "Something went wrong"})
	}
}

export const getDailyHistory = async (req, res) => {
	try {
		const { symbol, period } = req.query
		const now = Math.floor(Date.now()/1000)
		let length;
		switch (period) {
			case '1Y':
				length = 365*24*60*60
				break;
			case '6M':
				length = 6*31*24*60*60
				break;
			case '1M':
				length = 31*24*60*60
				break;
			case '1D':
				length = 24*60*60
				break;
			case '5D':
				length = 5*24*60*60
				break;
			default:
				length = 31*24*60*60
		}
		const from = now - length
		const {data} = await FINNHUB_API.get(`/stock/candle?symbol=${symbol}&resolution=D&from=${from}&to=${now}&token=${FINNHUB_API_KEY}`)
		res.status(200).json({ data })

	} catch(error) {
		res.status(500).json({ message: "Something went wrong"})
	}
}


/*
export const getDailyHistory = async (req, res) => {
	try {
		const { symbol } = req.query
		const { data } = await ALPHAVANTAGE_API.get(`/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`)
		res.status(200).json({ data })

	} catch(error) {
		res.status(500).json({ message: "Something went wrong"})
	}

}

*/