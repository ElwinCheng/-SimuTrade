import React, { useState } from 'react'
import {Grid} from '@mui/material'
import StockInfo from './StockInfo'
import SearchBar from '../Lookup/SearchBar'
import BuyStock from './BuyStock'


const Stock = () => {
	return (
		<div>
			<SearchBar />
			<Grid container>
				<Grid item xs={8}>
					<StockInfo />
				</Grid>
				<Grid item xs={4}>
					<BuyStock />
				</Grid>

			</Grid>
		</div>
	)
}

export default Stock