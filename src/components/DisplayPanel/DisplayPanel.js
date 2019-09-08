import React from 'react';
import styleClasses from './DisplayPanel.module.css'
import Stack from './Stack/Stack';
import Current from './Current/Current';

const DisplayPanel = props => {
    return (
        <div className={styleClasses.DisplayPanel}>
            <Stack value='5+4/3' />
            <Current value='3' />
        </div>
    )
};

export default DisplayPanel;