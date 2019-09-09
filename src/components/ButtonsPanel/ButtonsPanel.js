import React from 'react';
import styleClasses from './ButtonsPanel.module.css';
import Button from './Button/Button';

const ButtonsPanel = props => {
    const backspaceStyle = {
        fontSize: '16px',
        fontWeight: 'normal',
        paddingTop: '7px'
    }
    return (
        <div className={styleClasses.ButtonsPanel}>
            <div>
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='CE' />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='C' />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='Backspace' specialStyle={backspaceStyle} />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='/' hide={props.isCurrencyConverter && !props.isCalculator} />
            </div>
            <div>
                <Button onPress={props.onButtonPressed} buttonType='Number' value='7' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='8' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='9' />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='x' hide={props.isCurrencyConverter && !props.isCalculator} />
            </div>
            <div>
                <Button onPress={props.onButtonPressed} buttonType='Number' value='4' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='5' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='6' />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='-' hide={props.isCurrencyConverter && !props.isCalculator} />
            </div>
            <div>
                <Button onPress={props.onButtonPressed} buttonType='Number' value='1' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='2' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='3' />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='+' hide={props.isCurrencyConverter && !props.isCalculator} />
            </div>
            <div>
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='+/-' hide={props.isCurrencyConverter && !props.isCalculator} />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='0' />
                <Button onPress={props.onButtonPressed} buttonType='Number' value='.' />
                <Button onPress={props.onButtonPressed} buttonType='Operation' value='=' hide ={props.isCurrencyConverter && !props.isCalculator}/>
            </div>
        </div>
    )
};

export default ButtonsPanel;