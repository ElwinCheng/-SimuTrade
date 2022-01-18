import mongoose from 'mongoose'

const tradeSchema = mongoose.Schema({
	symbol: { type: String, required: true},
	quantity: { type: Number, required: true},
	price: { type: Number, required: true},
	date: { type: Date, required: true},
	isBuy: { type: Boolean, required: true},
	investor_id: { type: String, required: true}
})

const Trade = mongoose.model('Trades', tradeSchema);

export default Trade