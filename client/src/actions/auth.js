import * as api from '../api/index'
import { AUTH, CREATE_PROFILE } from './constants'

export const signup = (formData) => async(dispatch) => {

	try {
		const { data } = api.signUp(formData)
		dispatch({ type: AUTH, data})
		window.location.href="/dashboard"

    } catch (error) {
			console.log(error)
    }
}
