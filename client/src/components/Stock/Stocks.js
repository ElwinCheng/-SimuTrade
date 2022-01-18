import React, { useState } from 'react'
import {Grid} from '@mui/material'
import StockInfo from './StockInfo'
import SearchBar from '../Lookup/SearchBar'
import BuyStock from './BuyStock'


const Stock = () => {
	return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<StockInfo />
				</Grid>

			</Grid>
		</div>
	)
}

export default Stock