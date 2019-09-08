import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc//Auxiliary/Auxiliary';
import DisplayPanel from '../../components/DisplayPanel/DisplayPanel';
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';
import {
    PRESS_C_BUTTON,
    PRESS_BACKSPACE_BUTTON,
    PRESS_NUMBER_BUTTON,
    PRESS_OPERATION_BUTTON,
    PRESS_EQUALS_TO_BUTTON
} from '../../store/actions/actionTypes';

class Calculator extends Component {
    state = {
        stack: [],
        currentResult: 0,
        currentInput: 0,
        displayText: 0,
        currentOperation: null,
        errorText: null
    }

    onButtonPressed = (type, value) => {
        if (type === 'Number') {
            this.props.pressNumber(value);
            return;
        }

        switch (value) {
            case 'C':
            case 'CE':
                this.props.pressC();
                break;
            case 'Backspace':
                this.props.pressBackspace();
                break;
            case '+/-':
                let currentInput = this.state.displayText;
                if (currentInput.toString().substr(0, 1) === '-') {
                    currentInput = currentInput.toString().substr(1);
                } else {
                    currentInput = '-' + currentInput;
                }
                this.setState({
                    currentInput: currentInput,
                    displayText: currentInput
                });
                break;
            case '=':
                this.props.pressEqualsTo();
                break;
            default:
                this.props.pressOperation(value);
                break;
        }


        // if (type === 'Operation') {
        //     if (this.state.currentInput !== 0) {
        //         if (!this.state.currentOperation) {
        //             this.setState((prevState) => {
        //                 return {
        //                     currentResult: Number(prevState.currentInput),
        //                     currentInput: 0,
        //                     currentOperation: value
        //                 }
        //             });
        //         } else {
        //             const result = this.performCalculation();
        //             if (value === '=') {
        //                 this.setState({
        //                     stack: [result],
        //                     currentResult: result,
        //                     currentInput: 0,
        //                     displayText: result,
        //                     currentOperation: null
        //                 });
        //                 return;
        //             }

        //             this.setState({
        //                 currentResult: result,
        //                 currentInput: 0,
        //                 displayText: result,
        //                 currentOperation: value
        //             });
        //         }
        //     } else {
        //         if (value === '=') {
        //             console.log('a')
        //             return;
        //         }
        //         const operationValue = value === '=' ? null : value;

        //         this.setState({ currentOperation: operationValue });

        //     }
        // }

    }

    performCalculation = () => {
        let currentResult = this.state.currentResult;
        let currentInput = Number(this.state.currentInput);
        switch (this.state.currentOperation) {
            case '+':
                return currentResult + currentInput;
            case '-':
                return currentResult - currentInput;
            case 'x':
                return currentResult * currentInput;
            case '/':
                if (currentInput === 0) {
                    this.setState({
                        errorText: 'Can\'t divide by 0'
                    });
                    break;
                }
                return currentResult / currentInput;
            default: return currentResult;
        }
    }

    render() {
        console.log(this.props);
        return (
            <Aux>
                <DisplayPanel currentValue={this.props.displayText} stackValue={this.props.stack} />
                <ButtonsPanel
                    onButtonPressed={this.onButtonPressed} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        stack: [...state.stack],
        currentResult: state.currentResult,
        currentInput: state.currentInput,
        displayText: state.displayText,
        currentOperation: state.currentOperation,
        errorText: state.errorText
    }
};

const mapDispatchToProps = dispatch => {
    return {
        pressC: () => dispatch({ type: PRESS_C_BUTTON }),
        pressBackspace: () => dispatch({ type: PRESS_BACKSPACE_BUTTON }),
        pressNumber: (value) => dispatch({ type: PRESS_NUMBER_BUTTON, value: value }),
        pressEqualsTo: () => dispatch({ type: PRESS_EQUALS_TO_BUTTON }),
        pressOperation: (value) => dispatch({ type: PRESS_OPERATION_BUTTON, value: value })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);