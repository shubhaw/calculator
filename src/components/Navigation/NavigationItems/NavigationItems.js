import React from 'react';
import styleClasses from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={styleClasses.NavigationItems}>
            <NavigationItem link='/' exact>Standard</NavigationItem>
            <NavigationItem link='/currencyConverter'>Currency</NavigationItem>
        </ul>
    );
};

export default NavigationItems;