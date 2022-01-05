import * as api from '../api/index'
import { AUTH, CREATE_PROFILE } from './constants'

export const signin = (formData) => async(dispatch) => {
	try {
		const { data } = api.signIn(formData)
		dispatch({ type: AUTH, data})
		window.location.href="/dashboard"
	} catch (error) {
		console.log(error)
	}
}

export const signup = (formData) => async(dispatch) => {

	try {
		const { data } = api.signUp(formData)
		dispatch({ type: AUTH, data})
		window.location.href="/dashboard"

    } catch (error) {
			console.log(error)
    }
}
