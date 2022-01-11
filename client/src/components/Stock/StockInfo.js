import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import Chart from '../Chart/Chart'
import { useDispatch } from 'react-redux'
import * as api from '../../api'
import { formatHistoricalData } from '../../utils/utils'
import { fetchInitialHistoriclData } from '../../actions/quotes'

const StockInfo = () => {

	const symbol = useSelector((state) => state.quote.symbol)
	const dailyHistory = useSelector((state) => state.quote.historicalData)
	const [stockInfo, setStockInfo] = useState(0)
	//const [dailyHistory, setDailyHistory] = useState([])
	const dispatch = useDispatch()


	const getQuote = async () => {
		const { data: { data } } = await api.quote(symbol)
		setStockInfo(data)
	}

	useEffect(() => {
		dispatch(fetchInitialHistoriclData())
	}, [])

	/*
	useEffect(() => {
		async function fetchHistory() {
			const { data: {data}} = await api.getDailyHistory(symbol)
			const formattedData = formatHistoricalData(data)
			setDailyHistory(formattedData)
		}
		fetchHistory()
	})
	*/

	setTimeout(getQuote, 3000)
	//const [symbol, setSymbol] = useState('AAPL')
	return (
		<div>
			<Grid container alignItems="flex-start">
				<Grid container item xs={8} flexDirection={"column"}>
					<Grid item>
						<h1>{`$${stockInfo.c}`}</h1>
					</Grid>
					<Grid item>
						<h2>{`${stockInfo.dp}`}</h2>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<p>{symbol}</p>
				</Grid>
				<Chart data={dailyHistory}/>

			</Grid>

		</div>	
	)
}

export default StockInfo