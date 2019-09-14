import React from 'react';
import styleClasses from './ButtonsPanel.module.css';
import Button from './Button/Button';

const ButtonsPanel = props => {
    const styleClass = props.isCalculator? styleClasses.ButtonsPanel_Calculator: styleClasses.ButtonsPanel_CurrencyConverter;
    return (
        <div className={styleClasses.ButtonsPanel + ' ' + styleClass}>
            
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='CE' styleClass={styleClasses.CE} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='C' styleClass={styleClasses.C} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='Backspace' styleClass={styleClasses.Backspace} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='/' hide={props.isCurrencyConverter && !props.isCalculator} styleClass={styleClasses.Division} />
            
            <Button onPress={props.onButtonPressed} buttonType='Number' value='7' styleClass={styleClasses.Seven} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='8' styleClass={styleClasses.Eight} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='9' styleClass={styleClasses.Nine} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='x' hide={props.isCurrencyConverter && !props.isCalculator} styleClass={styleClasses.Multiplication} />
            
            <Button onPress={props.onButtonPressed} buttonType='Number' value='4' styleClass={styleClasses.Four} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='5' styleClass={styleClasses.Five} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='6' styleClass={styleClasses.Six} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='-' hide={props.isCurrencyConverter && !props.isCalculator} styleClass={styleClasses.Subtraction} />
            
            <Button onPress={props.onButtonPressed} buttonType='Number' value='1' styleClass={styleClasses.One} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='2' styleClass={styleClasses.Two} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='3' styleClass={styleClasses.Three} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='+' hide={props.isCurrencyConverter && !props.isCalculator} styleClass={styleClasses.Addition} />
            
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='+/-' hide={props.isCurrencyConverter && !props.isCalculator} styleClass={styleClasses.ToggleSign} />
            <Button onPress={props.onButtonPressed} buttonType='Number' value='0' styleClass={styleClasses.Zero} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='.' styleClass={styleClasses.Dot} />
            <Button onPress={props.onButtonPressed} buttonType='Operation' value='=' hide={props.isCurrencyConverter && !props.isCalculator} styleClass={styleClasses.EqualsTo} />
        </div>

        // <div className={styleClasses.ButtonsPanel}>
        //     <Button onPress={props.onButtonPressed} buttonType='Operation' value='CE' />
        //     <Button onPress={props.onButtonPressed} buttonType='Operation' value='C' />
        //     <Button onPress={props.onButtonPressed} buttonType='Operation' value='Backspace' specialStyle={backspaceStyle} />
        //     <Button onPress={props.onButtonPressed} buttonType='Operation' value='/' hide={props.isCurrencyConverter && !props.isCalculator} />
        // </div>
    )
};

export default ButtonsPanel;