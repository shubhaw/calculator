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
    PRESS_EQUALS_TO_BUTTON,
    PRESS_TOGGLE_SIGN_BUTTON,
    PRESS_DOT_BUTTON
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
                this.props.pressToggleSign();
                break;
            case '=':
                this.props.pressEqualsTo();
                break;
            case '.':
                this.props.pressDot();
                break;
            default:
                this.props.pressOperation(value);
                break;
        }
    }

    render() {
        console.log(this.props);
        return (
            <Aux>
                <DisplayPanel currentValue={this.props.displayText} stackValue={this.props.stack} />
                <ButtonsPanel isCalculator
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
        pressOperation: (value) => dispatch({ type: PRESS_OPERATION_BUTTON, value: value }),
        pressDot: () => dispatch({ type: PRESS_DOT_BUTTON }),
        pressToggleSign: () => dispatch({ type: PRESS_TOGGLE_SIGN_BUTTON })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);