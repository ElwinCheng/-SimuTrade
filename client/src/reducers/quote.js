import { UPDATE_SELECTION } from "../actions/constants";

const quoteReducer =(state = { symbol: 'AAPL'}, action) => {
    switch (action.type) {
        case UPDATE_SELECTION:
            return {...state, symbol: action.payload}

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

export default quoteReducer