import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, Grid, Radio, RadioGroup, FormControlLabel, Avatar } from '@mui/material'
import Chart from '../Chart/Chart'
import { useDispatch } from 'react-redux'
import * as api from '../../api'
import { formatHistoricalData } from '../../utils/utils'
import { getQuote, fetchInitialHistoriclData, fetchInitialQuote, getHistoricalData } from '../../actions/quotes'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { red, green } from '@mui/material/colors'
import SearchBar from '../Lookup/SearchBar'
import styles from './StockInfo.module.css'
import BuyStock from './BuyStock'

const StockInfo = () => {


	const symbol = useSelector((state) => state.quote.symbol)
	const stockInfo = useSelector((state) => state.quote.stock)
	const dailyHistory = useSelector((state) => state.quote.historicalData)
	const company = useSelector((state) => state.quote.company)
	const [currentSymbol, setCurrentSymbol] = useState('AAPL')
	const [seconds, setSeconds] = useState(0)
	const [period, setPeriod] = useState('1M')
	const [companyProfile, setCompanyProfile] = useState('Apple Inc')
	const dispatch = useDispatch()

	const fetchQuote = async () => {
		dispatch(getQuote(symbol))
	}
	useEffect(() => {
		console.log(symbol)
		const timer = setInterval(fetchQuote,3000)
		return() => clearTimeout(timer)
	}, [symbol])

	useEffect(() => {
		dispatch(fetchInitialQuote())
		dispatch(fetchInitialHistoriclData())
	}, [])

	const handleChangePeriod = ({target: {value}}) => {
		setPeriod(value)
		dispatch(getHistoricalData(symbol, value))
	}

	/*
	useEffect(() => {
		async function fetchHistory() {
			const { data: {data}} = await api.getDailyHistory(symbol)
			const formattedData = formatHistoricalData(data)
			setDailyHistory(formattedData)
		}
		fetchHistory()
	})
						<h1>{`$${stockInfo.c}`}</h1>
	*/

	//const [symbol, setSymbol] = useState('AAPL')
	return (
		<Grid container direction="row">
			<Grid sx={{borderRight: '1px solid grey'}} item xs={7}>

				<SearchBar period={period}/>
				<Grid sx={{padding: '20px 0px 10px 0px'}} container direction="row">
					<Avatar alt="Company Logo" src={`https://finnhub.io/api/logo?symbol=${symbol}`}></Avatar>
					<h1 style={{padding: '0px 0px 0px 10px'}} >{company.name}</h1>
				</Grid>
				<Grid container flexDirection={"column"} alignItems="flex-start">
					<Grid container item alignItems="flex-start">
						<Grid container item xs={8} flexDirection={"column"}>
							<Grid container alignItems="flex-end" item>
								<h1 key={stockInfo.c.toFixed(2)} className={styles.price}>{`${stockInfo.c.toFixed(2)}`}</h1>
								<h2 style={{margin: '0px 0px 8px 5px'}}>USD</h2>
							</Grid>
							<Grid container item alignItems="center" color={stockInfo.dp < 0 ? "red" : "green"}>
								<Grid item>
									<h2>{`${Number(stockInfo.dp) < 0 ? "" : "+"}${stockInfo.d.toFixed(2)} (${Number(stockInfo.dp) < 0 ? "" : "+"}${stockInfo.dp.toFixed(2)}%)`}</h2>
								</Grid>
								<Grid className={styles.arrowWrapper} item>
									<h2>
										{Number(stockInfo.dp) < 0 ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
									</h2>
								</Grid>
								<Grid item>
									<h2>Today</h2>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<p>{symbol}</p>
						</Grid>

					</Grid>
					<RadioGroup 
						className={styles.radioWrapper}
						row 
						name="row-radio-buttons-group"
						value={period}
						onChange={handleChangePeriod}
					>
						<FormControlLabel value="5D" control={<Radio />} label="5D"/>
						<FormControlLabel value="1M" control={<Radio />} label="1M"/>
						<FormControlLabel value="6M" control={<Radio />} label="6M"/>
						<FormControlLabel value="1Y" control={<Radio />} label="1Y"/>
					</RadioGroup>
					<Grid item>
						<Chart data={dailyHistory}/>
					</Grid>
				</Grid>
			</Grid>	
			<Grid item xs={5}>
				<BuyStock />
			</Grid>
		</Grid>
	)
}

export default StockInfo