import React from 'react';
import styleClasses from './ConversionPanel.module.css';
import Dropdown from '../UIElements/Dropdown/Dropdown';
import DisplayPanel from '../DisplayPanel/DisplayPanel';

const ConversionPanel = props => {

    return (
        <div className={styleClasses.ConversionPanel}>
            <DisplayPanel currentValue={props.baseCurrencyValue} />
            <Dropdown
                currencyList={props.currencyList}
                initialValue={props.initialBaseCurrency}
                onNewCurrencySelected={props.onNewBaseCurrencySelected} />
            <DisplayPanel currentValue={props.targetCurrencyValue} />
            <Dropdown
                currencyList={props.currencyList}
                initialValue={props.initialTargetCurrency}
                onNewCurrencySelected={props.onNewTargetCurrencySelected} />
        </div>
    );
};

export default ConversionPanel;