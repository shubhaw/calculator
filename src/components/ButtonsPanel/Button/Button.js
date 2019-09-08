import React from 'react';
import styleClasses from './Button.module.css';

const Button = (props) => {
    let classes = [styleClasses.Button, styleClasses[props.buttonType]].join(' ');

    return (
        <button className={classes} onClick={props.onButtonClick}>
            {props.value}
        </button>
    );
};

export default Button;