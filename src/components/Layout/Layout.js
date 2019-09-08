import React from 'react';
import styleClasses from './Layout.module.css';
import Calculator from '../../containers/calculator/calculator';

const Layout = props => {
    return (
        <div className={styleClasses.Layout}>
            <Calculator />
        </div>
    );
};

export default Layout;