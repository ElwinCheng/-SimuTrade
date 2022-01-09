import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	symbol: { type: String, required: true},
	quantity: { type: Number, required: true},
	price: { type: Number, required: true},
	date: { type: Date, required: true},
	isBuy: { type: Boolean, required: true},
})

const Trade = mongoose.model('Trades', userSchema);

export default Trade