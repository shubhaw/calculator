import React from 'react';
import styleClasses from './Layout.module.css';

const Layout = props => {
    return (
        <div className={styleClasses.Layout}>
            {props.children}
        </div>
    );
};

export default Layout;