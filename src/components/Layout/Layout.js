import React from 'react';
import styleClasses from './Layout.module.css';
import DisplayPanel from '../DisplayPanel/DisplayPanel';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';

const Layout = props => {
    return (
        <div className={styleClasses.Layout}>
            <DisplayPanel />
            <ButtonsPanel />
        </div>
    );
};

export default Layout;