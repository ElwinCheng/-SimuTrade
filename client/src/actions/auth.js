import * as api from '../api/index'
import { LOAD_USER, AUTH, CREATE_PROFILE } from './constants' 
import { loadUser } from './user'


export const signin = (formData, handleFail, handleSuccess) => async(dispatch) => {
	try {
		const { data } = await api.signIn(formData)
		console.log(data)
		handleSuccess()
		//dispatch({ type: LOAD_USER, payload: data.result.cash}) why only one dispatch works?
		dispatch({ type: AUTH, data})
		window.location.href="/stocks"
	} catch (error) {
		handleFail()
		console.log(error)
	}
}

export const signup = (formData) => async(dispatch) => {

	try {
		const { data } = await api.signUp(formData)

		console.log('hello')
		dispatch({ type: AUTH, data})
		window.location.href="/stocks"

    } catch (error) {
			console.log('by')
			console.log(error)
    }
}
