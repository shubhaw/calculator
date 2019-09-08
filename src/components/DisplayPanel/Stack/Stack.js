import React from 'react';
import styleClasses from './Stack.module.css';

const Stack = props => {
    return (
        <div className={styleClasses.Stack}>
            {props.value}
        </div>
    );
};

export default Stack;