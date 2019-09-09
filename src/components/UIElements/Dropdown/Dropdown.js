import React from 'react';
import styleClasses from './Dropdown.module.css';

const Dropdown = props => {
    return (
        <div className={styleClasses.Dropdown}>
            <select onChange={(event) => props.onNewCurrencySelected(event.target.value)}>
                <option value={props.initialValue}>{props.initialValue}</option>
                {
                    props.currencyList.map(currency => <option key={currency} value={currency}>{currency}</option>)
                }
            </select>
        </div>
    );
};

export default Dropdown;