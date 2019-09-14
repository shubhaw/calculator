import React from 'react';
import styleClasses from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => {
    return (
        <header className={styleClasses.Toolbar}>
            <div style={{ display: 'inline-block' }}>
                <DrawerToggle onDrawerToggleClick={props.onDrawerToggleClick} />
            </div>
            {/* <div style={{ display: 'inline-block', border: '15px solid red' }}>
                {props.current}
            </div> */}


        </header>
    );
};

export default Toolbar;