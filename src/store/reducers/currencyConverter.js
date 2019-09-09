import {
    PRESS_CURRENCY_NUMBER_BUTTON,
    CHANGE_BASE_CURRENCY,
    CHANGE_TARGET_CURRENCY,
    PRESS_CURRENCY_BACKSPACE_BUTTON,
    PRESS_CURRENCY_CLEAR_BUTTON,
    PRESS_CURRENCY_DOT_BUTTON
} from '../actions/actionTypes';

const initialState = {
    currencyList: ['CAD', 'EUR', 'GBP', 'INR', 'USD'],
    baseCurrency: 'USD',
    targetCurrency: 'INR',
    baseCurrencyValue: 0,
    targetCurrencyValue: 0
}

const TEMP_CONVERSION_RATE = 71.71;

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PRESS_CURRENCY_NUMBER_BUTTON:
            return pressCurrencyNumberButton(state, action);
        case CHANGE_BASE_CURRENCY:
            return changeBaseCurrency(state, action);
        case CHANGE_TARGET_CURRENCY:
            return changeTargetCurrency(state, action);
        case PRESS_CURRENCY_BACKSPACE_BUTTON:
            return pressCurrencyBackspaceButton(state);
        case PRESS_CURRENCY_CLEAR_BUTTON:
            return pressCurrencyClearButton(state);
        case PRESS_CURRENCY_DOT_BUTTON:
            return pressCurrencyDotButton(state);
        default: return state;
    }
}

const pressCurrencyNumberButton = (state, action) => {
    let baseCurrencyValue = state.baseCurrencyValue;
    baseCurrencyValue = Number(baseCurrencyValue.toString() + action.value);
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrencyValue: baseCurrencyValue,
        targetCurrencyValue: TEMP_CONVERSION_RATE * baseCurrencyValue
    }
}

const changeBaseCurrency = (state, action) => {
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrency: action.currency
    }
}

const changeTargetCurrency = (state, action) => {
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrency: action.currency
    }
}

const pressCurrencyBackspaceButton = (state) => {
    let baseCurrencyValue = state.baseCurrencyValue;
    baseCurrencyValue = baseCurrencyValue.toString();
    baseCurrencyValue = baseCurrencyValue.substr(0, baseCurrencyValue.length - 1);
    if (baseCurrencyValue === '') {
        baseCurrencyValue = 0
    }
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrencyValue: Number(baseCurrencyValue),
        targetCurrencyValue: TEMP_CONVERSION_RATE * Number(baseCurrencyValue)
    }
}

const pressCurrencyClearButton = state => {
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrencyValue: 0,
        targetCurrencyValue: 0
    }
}

const pressCurrencyDotButton = state => {
    let baseCurrencyValue = state.baseCurrencyValue;
    baseCurrencyValue = baseCurrencyValue.toString() + '.';
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrencyValue: baseCurrencyValue
    }
}

export default reducer;