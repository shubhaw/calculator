import React from 'react';
import styleClasses from './SideDrawer.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideDrawer = props => {
    return (
        <Aux>
            <div className={[styleClasses.SideDrawer, props.show ? styleClasses.Open : styleClasses.Close].join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;