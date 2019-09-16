import { STORE_RATES_IN_STATE } from '../actions/actionTypes';

import axios from '../../axios-currency-converter';

export const fetchRatesFromAPI = (conversionData) => {
    return dispatch => {
        if (!conversionData) {
            axios.get('/latest?base=USD')
                .then(response => {
                    console.log(response.data);
                    return dispatch(storeRatesInState(response.data));
                })
                .catch(err => console.log(err));
        } else {
            console.log('Conversion Data already present!');
        }

    }
}

export const storeRatesInState = (conversionData) => {
    return {
        type: STORE_RATES_IN_STATE,
        conversionData: conversionData
    }
}
