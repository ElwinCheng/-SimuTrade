import { UPDATE_SELECTION, FETCH_INITIAL_HISTORICAL_DATA } from "../actions/constants"

const quoteReducer =(state = { symbol: 'AAPL'}, action) => {
    switch (action.type) {
        case UPDATE_SELECTION:
            return {...state, symbol: action.symbol, historicalData: action.historicalData}
        case FETCH_INITIAL_HISTORICAL_DATA:
            console.log(action.payload)
            return {...state, historicalData: action.payload}

        default:
            return state
    }
}

export default quoteReducer