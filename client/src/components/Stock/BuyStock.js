import React, {useState} from 'react'
import Field from '../Login/Field'
import { Button, Grid } from '@mui/material'
import { useSelector } from 'react-redux'

const BuyStock = () => {
	const [quantity, setQuantity] = useState(0)

	const stockInfo = useSelector((state) => state.quote.stock)
	const user = useSelector((state) => state.quote.stock)

	const handleChange = ({target: {value}}) => {
		if (value < 0) return setQuantity(0)
		setQuantity(value)
		//setQuantity(Number(e.target.value))
	}
	return (
		<form>
			<Grid>
				<Field label="Quantity" type="number" value={quantity} handleChange={handleChange}/>
				<Button type="submit" variant="contained">
					Buy
				</Button>
				<Button type="submit" variant="contained">
					Sell
				</Button>
				<h1>{`Total value: ${(stockInfo.c * quantity).toFixed(2)}`}</h1>
			</Grid>
		</form>
	)
}

export default BuyStock