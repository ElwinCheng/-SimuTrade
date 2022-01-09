import React, { useState } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateSelection } from '../../actions/quotes'
import * as api from '../../api/index'

const SearchBar = (props) => {
	const [value, setValue] = useState('')
	const [queries, setQueries] = useState([])

	const dispatch = useDispatch()

	const handleChange = async (e, query) => {
		setValue(query)
		const { data: { data: {result } } } = await api.query(query)
		const stockSymbols = result.map(q => q.symbol)
		setQueries(stockSymbols)
	}

	const handleSelect = (e, value) => {
		dispatch(updateSelection(value))
	}

	return (
		<div>
			<Autocomplete 
				freeSolo 
				filterOptions={(x) => x} // disable built-in filtering
				// how to throttle requests?
				options={queries} 
				onChange={handleSelect}
				inputValue={value}
				onInputChange={handleChange}
				renderInput={ (params) => <TextField {...params} label="Search a stock"/>}
				/>

		</div>
	)
}

export default SearchBar 