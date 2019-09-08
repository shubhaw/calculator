import React from 'react';
import styleClasses from './DisplayPanel.module.css'
import Stack from './Stack/Stack';
import Current from './Current/Current';

const DisplayPanel = props => {
    return (
        <div className={styleClasses.DisplayPanel}>
            <Stack value={props.stackValue} />
            <Current value={props.currentValue} />
        </div>
    )
};

export default DisplayPanel;