import React, { Component } from 'react';
import Aux from '../../hoc//Auxiliary/Auxiliary';
import DisplayPanel from '../../components/DisplayPanel/DisplayPanel';
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';

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


        if (type === 'Operation' && (value === 'C' || value === 'CE')) {
            this.resetStates();
            return;
        }

        if (type === 'Operation' && value === '+/-') {
            let currentInput = this.state.displayText;
            if (currentInput.toString().substr(0, 1) === '-') {
                currentInput = currentInput.toString().substr(1);
            } else {
                currentInput = '-' + currentInput;
            }
            this.setState({
                currentInput: currentInput,
                displayText: currentInput
            })
            return;
        }

        if (type === 'Operation' && value === 'Backspace') {
            let currentInput = this.state.currentInput;

            currentInput = currentInput.toString().substr(0, currentInput.length - 1);
            let stack = [...this.state.stack];
            stack.pop();
            this.setState({
                stack: stack,
                currentInput: currentInput,
                displayText: currentInput
            });
            console.log(currentInput);
            return;
        }

        if (type === 'Operation') {
            if (this.state.currentInput !== 0) {
                if (!this.state.currentOperation) {
                    this.setState((prevState) => {
                        return {
                            currentResult: Number(prevState.currentInput),
                            currentInput: 0,
                            currentOperation: value
                        }
                    });
                } else {
                    const result = this.performCalculation();
                    if (value === '=') {
                        this.setState({
                            stack: [result],
                            currentResult: result,
                            currentInput: 0,
                            displayText: result,
                            currentOperation: null
                        });
                        return;
                    }

                    this.setState({
                        currentResult: result,
                        currentInput: 0,
                        displayText: result,
                        currentOperation: value
                    });
                }
            } else {
                if (value === '=') {
                    console.log('a')
                    return;
                }
                const operationValue = value === '=' ? null : value;

                this.setState({ currentOperation: operationValue });

            }
        } else if (type === 'Number') {
            let currentInput = this.state.currentInput;
            currentInput = currentInput.toString() + value;
            if (currentInput.substr(0, 1) === '0') {
                currentInput = currentInput.substr(1);
            }
            this.setState({
                currentInput: currentInput,
                displayText: currentInput
            });
        }


        this.setState((prevState) => {
            return {
                stack: prevState.stack.concat(value),
                errorText: null
            }
        });
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

    resetStates = () => {
        this.setState({
            stack: [],
            currentResult: 0,
            currentInput: 0,
            displayText: 0,
            currentOperation: null,
            errorText: null
        });
    }

    render() {
        console.log(this.state);
        return (
            <Aux>
                <DisplayPanel currentValue={this.state.displayText} stackValue={this.state.stack} />
                <ButtonsPanel
                    onButtonPressed={this.onButtonPressed} />
            </Aux>
        );
    }
}

export default Calculator;