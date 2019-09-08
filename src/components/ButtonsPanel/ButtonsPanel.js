import React from 'react';
import styleClasses from './ButtonsPanel.module.css';
import Button from './Button/Button';

const ButtonsPanel = props => {
    return (
        <div className={styleClasses.ButtonsPanel}>
            <div>
                <Button buttonType='Operation' value='CE' />
                <Button buttonType='Operation' value='C' />
                <Button buttonType='Operation' value='Clear' />
                <Button buttonType='Operation' value='/' />
            </div>
            <div>
                <Button buttonType='Number' value='7' />
                <Button buttonType='Number' value='8' />
                <Button buttonType='Number' value='9' />
                <Button buttonType='Operation' value='x' />
            </div>
            <div>
                <Button buttonType='Number' value='4' />
                <Button buttonType='Number' value='5' />
                <Button buttonType='Number' value='6' />
                <Button buttonType='Operation' value='-' />
            </div>
            <div>
                <Button buttonType='Number' value='1' />
                <Button buttonType='Number' value='2' />
                <Button buttonType='Number' value='3' />
                <Button buttonType='Operation' value='+' />
            </div>
            <div>
                <Button buttonType='Number' value='+/-' />
                <Button buttonType='Number' value='0' />
                <Button buttonType='Number' value='.' />
                <Button buttonType='Operation' value='=' />
            </div>
        </div>
    )
};

export default ButtonsPanel;