import React, {useState} from 'react'
import Field from '../Login/Field'
import { Button, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import * as api from '../../api'

const BuyStock = ({isBuy}) => {
	const [quantity, setQuantity] = useState(0)

	const stockInfo = useSelector((state) => state.quote.stock)
	const symbol = useSelector((state) => state.quote.symbol)
	const user = JSON.parse(localStorage.getItem('profile'))

	const handleChange = ({target}) => {
		const value = Math.floor(Number(target.value))
		if (value < 0) return setQuantity(0)
		setQuantity(value)
		//setQuantity(Number(e.target.value))
	}

	const handleClick = (e) => {
		e.preventDefault()
		if (quantity === 0) return alert('Value must be greater than 0')
		const date = new Date()
		const tradeData = {isBuy: e.target.value === 'buy', symbol, quantity, price: stockInfo.c, date, investor_id: user.result._id}
		api.buyStock(tradeData)
		//console.log({isBuy: e.target.value === 'buy', symbol, quantity, price: stockInfo.c*quantity, date, investor_id: user._id})
		//api.buyStock({isBuy, symbol, quantity, price: stockInfo.c, date, investor_id: user._id})
	}

	return (
		<form>
			<Field label="Quantity" type="number" value={quantity} handleChange={handleChange}/>
			<Grid sx={{padding: '20px 0px 10px 0px'}} direction="row" container >
				<Grid container item xs={6} justifyContent='center'>
					<Button size="large" value="buy" onClick={handleClick} style={{width: '100px', backgroundColor: "green"}} type="submit" variant="contained">
						Buy
					</Button>
				</Grid>
				<Grid container item xs={6} justifyContent='center'>
					<Button value="sell" onClick={handleClick} style={{width: '100px', backgroundColor: "red"}} type="submit" variant="contained">
						Sell
					</Button>
				</Grid>
			</Grid>
				<h1>{`Total value: ${(stockInfo.c * quantity).toFixed(2)}`}</h1>
		</form>
	)
}

export default BuyStock