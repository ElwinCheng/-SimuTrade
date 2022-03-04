import React, {useState} from 'react'
import { UPDATE_USER } from '../../actions/constants'
import Field from '../Login/Field'
import { Button, Grid, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../../api'
import Alert from '../Snackbar/Alert'
import AssetValue from '../Assets/AssetValue'

const BuyStock = ({isBuy}) => {
	const [quantity, setQuantity] = useState(0)
	//const cash = 100;
	const cash = useSelector((state) => state?.auth?.authData?.result?.cash) // user cash
	const stockInfo = useSelector((state) => state.quote.stock)
	const symbol = useSelector((state) => state.quote.symbol)
	const user = JSON.parse(localStorage.getItem('profile'))
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const [success, setSuccess] = useState(true)
	const [message, setMessage] = useState("Success")
	const assets = useSelector(state => state?.auth?.authData?.assets)

	const handleChange = ({target}) => {
		const value = Math.floor(Number(target.value))
		if (value < 0) return setQuantity(0)
		setQuantity(value)
		//setQuantity(Number(e.target.value))
	}

	const handleClose = (event, reason) => {
		setOpen(false)
	}

	const handleClick = (e) => {
		e.preventDefault()
		if (quantity === 0) return alert('Value must be greater than 0')
		if (quantity * stockInfo.c > cash) {
			setMessage("Not enough cash")
			setSuccess(false)
			return setOpen(true)
		}
		setSuccess(true)
		const date = new Date()
		const tradeData = {isBuy: e.target.value === 'buy', symbol, quantity, price: stockInfo.c, date, investor_id: user?.result?._id}
		api.buyStock(tradeData)
		console.log(user.result)
		const newAssets = {...assets}
		newAssets[symbol] = assets[symbol] + quantity
		dispatch({type: UPDATE_USER, data: {...user, assets: newAssets, result: {...user.result, cash: cash - stockInfo.c * quantity} } })
		setOpen(true)
		//console.log({isBuy: e.target.value === 'buy', symbol, quantity, price: stockInfo.c*quantity, date, investor_id: user._id})
		//api.buyStock({isBuy, symbol, quantity, price: stockInfo.c, date, investor_id: user._id})
	}

	return (
		<form style={{padding: '0px 0px 0px 70px'}}>
			<h1 style={{padding: '20px 0px 20px 0px'}}>Cash: {cash?.toFixed(2)}</h1>
			<h1>
				<AssetValue message="Assets Value: "/>
			</h1>
			<hr></hr>
			<br></br>
			<Field label="Quantity" type="number" value={quantity} handleChange={handleChange}/>
			<Grid sx={{padding: '20px 0px 10px 0px'}} direction="row" container >
				<Grid container item xs={12} justifyContent='center'>
					<Button size="large" value="buy" onClick={handleClick} style={{width: '100px', backgroundColor: "green"}} type="submit" variant="contained">
						Buy
					</Button>
				</Grid>
				{
/*
				<Grid container item xs={6} justifyContent='center'>
					<Button value="sell" onClick={handleClick} style={{width: '100px', backgroundColor: "red"}} type="submit" variant="contained">
						Sell
					</Button>
				</Grid>
*/
				}
			</Grid>
			<h1>{`Total value: ${(stockInfo.c * quantity).toFixed(2)}`}</h1>
			<Snackbar sx={{width: '100%ft7g '}} open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} sx={{width: '100%'}} severity={success ? "success": "error"}>
					{success ? `${quantity} ${symbol} stock${quantity === 1 ? "" : "s"} successfully purchased` : message}
				</Alert>
			</Snackbar>
		</form>
	)
}

export default BuyStock