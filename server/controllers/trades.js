import Trade from '../models/tradeModel.js'
import dotenv from 'dotenv'

dotenv.config()

export const getQuote = async (req, res) => {
    const quote = await 
    res.status(200).json()
}

export const buy = async (req, res) => {
    const { quantity, symbol, isBuy } = req.body

    try {

            const date = new Date()

            Trade.create({isBuy: true,  date })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong"})
    }
}
