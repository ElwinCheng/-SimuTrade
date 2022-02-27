import { LOAD_USER, UPDATE_CASH } from '../actions/constants'

const userReducer =(state = {authData: null, cash: 1000}, action) => {
    switch (action.type) {
        case LOAD_USER:
					console.log(action.payload)
					console.log('turtle')
					return {...state, cash: 10000}

						/*
            case LOGOUT:
                localStorage.clear()
                return {...state, authData: null}

            case UPDATE_USER:
                localStorage.setItem('profile', JSON.stringify({...action?.data}))
                // console.log(action?.data)
                return {...state, authData: action?.data}
						*/
        
        default:
            return state
    }
}

export default userReducer