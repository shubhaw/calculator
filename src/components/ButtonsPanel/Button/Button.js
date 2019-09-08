import React from 'react';
import styleClasses from './Button.module.css';

const Button = (props) => {
    let classes = [styleClasses.Button, styleClasses[props.buttonType]].join(' ');
    
    return (
        <button className={classes} onClick={() => props.onPress(props.buttonType, props.value)} style={props.specialStyle}>
            {props.value}
        </button>
    );
};

export default Button;