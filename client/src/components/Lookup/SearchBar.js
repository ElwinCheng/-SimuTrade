import React, { useEffect, useState } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getQuote, updateSelection } from '../../actions/quotes'
const fuzzysort = require('fuzzysort')


const SearchBar = ({period}) => {
	const [value, setValue] = useState('')
	const [stocks, setStocks] = useState([])
	const [closestMatches, setClosestMatches] = useState([])

	const dispatch = useDispatch()

	useEffect(() => {
		fetch('https://simutrade.herokuapp.com/quotes/query')
			.then( response => response.json())
			.then(({data}) => setStocks(data))
	},[])


	const handleChange = async (e, query) => {
		setValue(query)
		console.log(query)
		if (!query) return
		const matches = fuzzysort.go(query, stocks, {key: 'displaySymbol'}).slice(0, 10)
		setClosestMatches(matches)
	}

	const handleSelect = (e, symbol) => {
		if (e.target.tagName !== "LI") return
		const ticker = symbol.split(" ")[0]
		dispatch(getQuote(ticker))
		dispatch(updateSelection(ticker, period))
	}

	return (
		<div>
			<Autocomplete 
				style={{width: 300}}
				freeSolo 
				filterOptions={(x) => x} // disable built-in filtering
				// how to throttle requests?
				options={closestMatches?.map(d => d.target + ' - ' + d.obj.description)} 
				onChange={handleSelect}
				inputValue={value}
				onInputChange={handleChange}
				renderInput={ (params) => <TextField {...params} label="Search a stock"/>}
				/>

		</div>
	)
}

export default SearchBar 