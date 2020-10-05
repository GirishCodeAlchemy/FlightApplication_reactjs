import * as actionTypes from './actionTypes';

const reducer = (state, action) => {
    console.log("state: ", state)
    switch (action.type) {
        case actionTypes.FLIGHT_START: return {
            flightList: [],
            error: null,
            loading: true
        }
        case actionTypes.FLIGHT_SUCCESS: return {
            error: null,
            flightList: action.list,
            loading: false
        }
        case actionTypes.FLIGHT_ERROR: return {
            flightList: [],
            error: action.error,
            loading: false
        }
        default: return {
            flightList: [],
            loading: false,
            error: null
        };
    }
}

export default reducer;
