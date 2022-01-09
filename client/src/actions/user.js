import * as api from '../api/index'
import { LOAD_USER, UPDATE_USER } from './constants'

export const loadUser = (userData) => {
	return { type: LOAD_USER, cash: userData.result.cash, assets: userData.result.assets}
}

export const updateUser = (data) => async(dispatch) => {
	try {
		const { newUserState } = await api.updateUser(data)
		dispatch({ type: UPDATE_USER, data: newUserState})
	} catch (error) {
			console.log(error)
	}
}
