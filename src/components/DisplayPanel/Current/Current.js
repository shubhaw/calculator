import React from 'react';
import styleClasses from './Current.module.css';

const Current = props => {
    return (
        <div className={styleClasses.Current}>
            {props.value}
        </div>
    );
};

export default Current;