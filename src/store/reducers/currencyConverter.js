import {
    STORE_RATES_IN_STATE,
    PRESS_CURRENCY_NUMBER_BUTTON,
    CHANGE_BASE_CURRENCY,
    CHANGE_TARGET_CURRENCY,
    PRESS_CURRENCY_BACKSPACE_BUTTON,
    PRESS_CURRENCY_CLEAR_BUTTON,
    PRESS_CURRENCY_DOT_BUTTON
} from '../actions/actionTypes';

const initialState = {
    conversionData: null,
    currencyList: ['AUD','BGN','BRL','CAD','CHF','CNY','CZK','DKK','EUR','GBP','HKD','HRK','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','USD','ZAR'],
    baseCurrency: 'USD',
    targetCurrency: 'INR',
    baseCurrencyValue: 0,
    targetCurrencyValue: 0,
    conversionRate: 1
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case STORE_RATES_IN_STATE:
            return storeRatesInState(state, action);
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

const storeRatesInState = (state, action) => {
    const baseCurrencyConversionRateFromUSD = action.conversionData.rates[state.baseCurrency];
    const targetCurrencyConversionRateFromUSD = action.conversionData.rates[state.targetCurrency];
    const conversionRate = calculateCurrencyRate(baseCurrencyConversionRateFromUSD, targetCurrencyConversionRateFromUSD);
    return {
        ...state,
        conversionData: action.conversionData,
        conversionRate: conversionRate,
        currencyList: [...state.currencyList]
    }
}

const calculateCurrencyRate = (baseCurrencyConversionRateFromUSD, targetCurrencyConversionRateFromUSD) => {
    return ( (1/baseCurrencyConversionRateFromUSD) * targetCurrencyConversionRateFromUSD);
}

const pressCurrencyNumberButton = (state, action) => {
    let baseCurrencyValue = state.baseCurrencyValue;
    baseCurrencyValue = Number(baseCurrencyValue.toString() + action.value);
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrencyValue: baseCurrencyValue,
        targetCurrencyValue: (state.conversionRate * baseCurrencyValue).toFixed(2)
    }
}

const changeBaseCurrency = (state, action) => {
    const baseCurrencyConversionRateFromUSD = state.conversionData.rates[action.baseCurrency];
    const targetCurrencyConversionRateFromUSD = state.conversionData.rates[state.targetCurrency];
    const conversionRate = calculateCurrencyRate(baseCurrencyConversionRateFromUSD, targetCurrencyConversionRateFromUSD);
    const targetCurrencyValue = (Number(state.baseCurrencyValue) * conversionRate).toFixed(2);
    return {
        ...state,
        currencyList: [...state.currencyList],
        baseCurrency: action.baseCurrency,
        conversionRate: conversionRate,
        targetCurrencyValue: targetCurrencyValue
    }
}

const changeTargetCurrency = (state, action) => {
    const baseCurrencyConversionRateFromUSD = state.conversionData.rates[state.baseCurrency];
    const targetCurrencyConversionRateFromUSD = state.conversionData.rates[action.currency];
    const conversionRate = calculateCurrencyRate(baseCurrencyConversionRateFromUSD, targetCurrencyConversionRateFromUSD);
    const targetCurrencyValue = (Number(state.baseCurrencyValue) * conversionRate).toFixed(2);
    return {
        ...state,
        currencyList: [...state.currencyList],
        targetCurrency: action.currency,
        conversionRate: conversionRate,
        targetCurrencyValue: targetCurrencyValue
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
        targetCurrencyValue: (state.conversionRate * Number(baseCurrencyValue)).toFixed(2)
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