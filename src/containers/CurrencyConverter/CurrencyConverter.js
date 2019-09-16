import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    PRESS_CURRENCY_NUMBER_BUTTON,
    CHANGE_BASE_CURRENCY,
    CHANGE_TARGET_CURRENCY,
    PRESS_CURRENCY_BACKSPACE_BUTTON,
    PRESS_CURRENCY_CLEAR_BUTTON,
    PRESS_CURRENCY_DOT_BUTTON
} from '../../store/actions/actionTypes';

import {fetchRatesFromAPI} from '../../store/actions/currencyConverter';

import Aux from '../../hoc//Auxiliary/Auxiliary';
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';
import ConversionPanel from '../../components/ConversionPanel/ConversionPanel';

class CurrencyConverter extends Component {
    
    componentDidMount = () => {
        this.props.fetchAndStoreRates(this.props.conversionData);
    }
    
    onButtonPressed = (type, value) => {
        if (type === 'Number') {
            this.props.onButtonPressed(value);
            return;
        }

        switch (value) {
            case 'C':
            case 'CE':
                this.props.onClearButtonPressed();
                break;
            case 'Backspace':
                this.props.onBackspacePressed();
                break;
            case '.':
                this.props.onDotButtonPressed();
                break;
            default: break;
        }
    }

    render() {
        
        return (
            <Aux>
                <ConversionPanel
                    currencyList={this.props.currencyList}
                    initialBaseCurrency={this.props.baseCurrency}
                    initialTargetCurrency={this.props.targetCurrency}
                    onNewBaseCurrencySelected={this.props.newBaseCountrySelected}
                    onNewTargetCurrencySelected={this.props.newTargetCountrySelected}
                    baseCurrencyValue={this.props.baseCurrencyValue}
                    targetCurrencyValue={this.props.targetCurrencyValue}
                />
                <ButtonsPanel isCurrencyConverter
                    onButtonPressed={this.onButtonPressed} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        conversionData: state.currencyConverter.conversionData,
        currencyList: state.currencyConverter.currencyList,
        baseCurrency: state.currencyConverter.baseCurrency,
        targetCurrency: state.currencyConverter.targetCurrency,
        baseCurrencyValue: state.currencyConverter.baseCurrencyValue,
        targetCurrencyValue: state.currencyConverter.targetCurrencyValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAndStoreRates: (conversionData) => dispatch(fetchRatesFromAPI(conversionData)),
        newBaseCountrySelected: (currency) => dispatch({type: CHANGE_BASE_CURRENCY, baseCurrency: currency}),
        newTargetCountrySelected: (currency) => dispatch({ type: CHANGE_TARGET_CURRENCY, currency: currency }),
        onButtonPressed: (value) => dispatch({ type: PRESS_CURRENCY_NUMBER_BUTTON, value: value }),
        onBackspacePressed: () => dispatch({ type: PRESS_CURRENCY_BACKSPACE_BUTTON }),
        onClearButtonPressed: () => dispatch({ type: PRESS_CURRENCY_CLEAR_BUTTON }),
        onDotButtonPressed: () => dispatch({ type: PRESS_CURRENCY_DOT_BUTTON })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);