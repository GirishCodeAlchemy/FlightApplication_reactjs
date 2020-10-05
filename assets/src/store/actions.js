import * as actionTypes from './actionTypes';
import axios from 'axios'

export const flightListSuccess = (payload) => {
    return {
        type: actionTypes.FLIGHT_SUCCESS,
        list: payload
    }
}

export const flightListfail = (error) => {
    return {
        type: actionTypes.FLIGHT_ERROR,
        error: error
    }
}

export const flightListStart = () => {
    return {
        type: actionTypes.FLIGHT_START
    }
}

export const fetchFlightList = () => {
    return dispatch => {
        console.log('flight')
        dispatch(flightListStart());
        axios.get('http://localhost:1337/flight')
            .then(response => {
                dispatch(flightListSuccess(response.data.message))
            })
            .catch(error => {
                dispatch(flightListfail(error))
            });
    }
}
