import React from 'react';
import styleClasses from './Layout.module.css';
import Calculator from '../../containers/calculator/calculator';
import CurrencyConverter from '../../containers/CurrencyConverter/CurrencyConverter';

const Layout = props => {
    return (
        <div className={styleClasses.Layout}>
            {/* <Calculator /> */}
            <CurrencyConverter />
        </div>
    );
};

export default Layout;