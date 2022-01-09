import React, { useState } from 'react'
import StockInfo from './StockInfo'
import SearchBar from '../Lookup/SearchBar'


const Stock = () => {
	return (
		<div>
			<SearchBar />
			<StockInfo />
		</div>
	)
}

export default Stock