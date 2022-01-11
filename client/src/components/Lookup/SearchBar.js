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
		const { data: { data: { bestMatches }  } } = await api.query(query)
		const stockSymbols = bestMatches.map(q => q['1. symbol'])
		setQueries(stockSymbols)
	}

	const handleSelect = (e, newValue) => {
		if (e.target.tagName !== "LI") return
		dispatch(updateSelection(newValue))
	}

	return (
		<div>
			<Autocomplete 
				style={{width: 300}}
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