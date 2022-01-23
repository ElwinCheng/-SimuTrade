import React, { useState } from 'react'
import {Grid} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import StockInfo from './StockInfo'
import SearchBar from '../Lookup/SearchBar'
import BuyStock from './BuyStock'


const Stock = () => {
	const user = JSON.parse(localStorage.getItem('profile'))
	const navigate = useNavigate()

	if (!user) navigate('/login')
	
	return (
		<div>
			<StockInfo />
		</div>
	)
}

export default Stock