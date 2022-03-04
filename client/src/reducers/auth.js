import { AUTH, LOGOUT, UPDATE_USER, LOAD_AUTH } from '../actions/constants'

const authReducer =(state = {authData: null}, action)=> {
	console.log('here')
	switch (action.type) {
		case AUTH:
			localStorage.setItem('profile', JSON.stringify({...action?.data}))
			return {...state, authData: action?.data}

		case LOGOUT:
			localStorage.clear()
			return {...state, authData: null}
		case UPDATE_USER:
			console.log(action?.data)
			localStorage.setItem('profile', JSON.stringify({...action?.data}))
			return {...state, authData: action?.data}
		case LOAD_AUTH:
			return {...state, authData: action?.payload}

					/*
            case UPDATE_USER:
                localStorage.setItem('profile', JSON.stringify({...action?.data}))
                // console.log(action?.data)
                return {...state, authData: action?.data}
						*/
        
        default:
            return state
    }
}

export default authReducer