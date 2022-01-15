import { UPDATE_SELECTION, FETCH_INITIAL_HISTORICAL_DATA, GET_HISTORICAL_DATA, GET_QUOTE, FETCH_INITIAL_QUOTE } from './constants'
import * as api from '../api/index'
import { formatHistoricalData } from '../utils/utils'

export const getHistoricalData = (symbol, period) => async (dispatch) => {
	try {
		const { data: {data: {c, t} } } = await api.getDailyHistory(symbol, period)
		const historicalData = c.map((c, i) => ({c, t: t[i]}))
		const payload = {historicalData, symbol}
		dispatch({ type: GET_HISTORICAL_DATA, payload})
	} catch(error) {
		console.log(error)
	}

}

export const updateSelection = (symbol, period) => async (dispatch) => {
	try {
		const { data: {data: {c, t} } } = await api.getDailyHistory(symbol, period)
		const historicalData = c.map((c, i) => ({c, t: t[i]}))
		const payload = {historicalData, symbol}
		dispatch({ type: UPDATE_SELECTION, payload})
	} catch(error) {
		console.log(error)
	}

}

export const getQuote = (symbol) => async (dispatch) => {
	try {
		const { data: { data } } = await api.quote(symbol)
		dispatch ({type: GET_QUOTE, payload: { stock: data, symbol: symbol}})
	} catch(error){
		console.log(error)
	}
}

export const fetchInitialQuote = () => async (dispatch) => {
	try {
		const { data: { data } } = await api.quote('AAPL')
		dispatch ({type: FETCH_INITIAL_QUOTE, payload: { stock: data, symbol: 'AAPL'} })
	} catch(error) {
		console.log(error)
	}
}

export const fetchInitialHistoriclData = () => async (dispatch) => {
	try {
		const {data: {data: {c, t}}} = await api.getDailyHistory('AAPL', '1M')
		const historicalData = c.map((c, i) => ({c, t: t[i]}))
		dispatch({type: FETCH_INITIAL_HISTORICAL_DATA, payload: {historicalData }})
	} catch (error) {
		console.log(error)
	}
}