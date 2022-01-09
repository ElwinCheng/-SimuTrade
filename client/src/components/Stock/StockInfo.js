import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as api from '../../api'

const StockInfo = () => {

	const symbol = useSelector((state) => state.quote.symbol)
	const [stockInfo, setStockInfo] = useState(0)


	const getQuote = async () => {
		const { data: { data } } = await api.quote(symbol)
		setStockInfo(data)
	}

	setTimeout(getQuote, 1000)
	//const [symbol, setSymbol] = useState('AAPL')
	return (
		<div>
			<p>{symbol}</p>
			<p>{stockInfo.c}</p>
			<p>{stockInfo.dp}</p>

		</div>	
	)
}

export default StockInfo