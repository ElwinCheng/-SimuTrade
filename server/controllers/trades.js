import Trade from '../models/tradeModel.js'
import dotenv from 'dotenv'

dotenv.config()

export const getTrades = async (req, res) => {
	const { _id } = req.query
	try {
		const allTrades = await Trade.find({ investor_id: _id})
		res.status(200).json(allTrades)
	} catch (error) {
		res.status(500).json(error)
	}
}

export const buyStock = async (req, res) => {
	const trade = req.body
	try {
		const date = new Date()
		const newTrade = await Trade.create({...trade, date})
		res.status(200).json(newTrade)
	} catch (error) {
		res.status(500).json({ message: "Something went wrong"})
	}
}

export const sellStock = async (req, res) => {
	const trade = req.body
	try {
		const date = new Date()
		Trade.create({...trade, date})

	} catch (error) {
			res.status(500).json({ message: "Something went wrong"})
	}
}