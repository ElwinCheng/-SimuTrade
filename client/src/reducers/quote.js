import { UPDATE_SELECTION, GET_HISTORICAL_DATA, FETCH_INITIAL_HISTORICAL_DATA, GET_QUOTE, FETCH_INITIAL_QUOTE } from "../actions/constants"

const quoteReducer =(state={ company: { name: 'Apple Inc'}, symbol: 'AAPL', stock: {c: 0, d: 0, dp: 0, h: 0, o: 0, pc: 0, t: 0}}, action) => {
    switch (action.type) {
        case UPDATE_SELECTION:
            return {...state, historicalData: action.payload.historicalData, symbol: action.payload.symbol, company: action.payload.company}
        case FETCH_INITIAL_HISTORICAL_DATA:
            return {...state, historicalData: action.payload.historicalData}
        case GET_QUOTE:
            return {...state, stock: action.payload.stock, symbol: action.payload.symbol}
        case FETCH_INITIAL_QUOTE:
            return {...state, stock: action.payload.stock, symbol: action.payload.symbol}
        case GET_HISTORICAL_DATA:
            return {...state, historicalData: action.payload.historicalData, symbol: action.payload.symbol}

        default:
            return state
    }
}

export default quoteReducer