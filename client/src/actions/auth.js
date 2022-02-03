import * as api from '../api/index'
import { AUTH, CREATE_PROFILE } from './constants'

export const signin = (formData, handleFail, handleSuccess) => async(dispatch) => {
	try {
		const { data } = await api.signIn(formData)
		handleSuccess()
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
