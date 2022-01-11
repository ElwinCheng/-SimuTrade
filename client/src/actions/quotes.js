import { UPDATE_SELECTION, FETCH_INITIAL_HISTORICAL_DATA } from './constants'
import * as api from '../api/index'
import { formatHistoricalData } from '../utils/utils'

export const updateSelection = (symbol) => async (dispatch) => {
	try {
		const {data: { data } } = await api.getDailyHistory(symbol)
		console.log(symbol)
		const historicalData = formatHistoricalData(data)
		dispatch({ type: UPDATE_SELECTION, symbol, historicalData})
	} catch(error) {
		console.log(error)
	}

}

export const fetchInitialHistoriclData = () => async (dispatch) => {
	try {
		const {data: { data } } = await api.getDailyHistory('AAPL')
		const payload = formatHistoricalData(data)
		dispatch({type: FETCH_INITIAL_HISTORICAL_DATA, payload})
	} catch (error) {
		console.log(error)
	}
}