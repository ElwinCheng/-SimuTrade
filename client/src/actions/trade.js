import { FETCH_TRADES } from './constants'
import * as api from '../index'

export const loadTrades = (user) => async (dispatch) => {
	const { data } = await api.getTrades(user?.result?._id)
	dispatch({type: FETCH_TRADES, payload: data})
	
	
}