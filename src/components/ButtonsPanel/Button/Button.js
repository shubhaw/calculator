import React from 'react';
import styleClasses from './Button.module.css';

const Button = (props) => {
    let classes = [styleClasses.Button, styleClasses[props.buttonType]];
    
    if(props.hide) {
        classes.push(styleClasses.Hide);
    }

    return (
        <button className={classes.join(' ')} onClick={() => props.onPress(props.buttonType, props.value)} style={props.specialStyle}>
            {props.value}
        </button>
    );
};

export default Button;