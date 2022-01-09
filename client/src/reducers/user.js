import { LOAD_USER } from '../actions/constants'

const userReducer =(state = {authData: null}, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {...state, ...action.data}

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