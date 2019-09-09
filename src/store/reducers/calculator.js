import {
    PRESS_C_BUTTON,
    PRESS_BACKSPACE_BUTTON,
    PRESS_NUMBER_BUTTON,
    PRESS_OPERATION_BUTTON,
    PRESS_EQUALS_TO_BUTTON,
    PRESS_TOGGLE_SIGN_BUTTON,
    PRESS_DOT_BUTTON
} from '../actions/actionTypes';

const initialState = {
    stack: [],
    currentResult: 0,
    currentInput: 0,
    displayText: 0,
    currentOperation: null,
    errorText: null
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRESS_C_BUTTON:
            return initialState;
        case PRESS_BACKSPACE_BUTTON:
            return pressBackspaceButton(state);
        case PRESS_NUMBER_BUTTON:
            return pressNumberButton(state, action);
        case PRESS_EQUALS_TO_BUTTON:
            return pressEqualsToButton(state);
        case PRESS_OPERATION_BUTTON:
            return pressOperationButton(state, action);
        case PRESS_DOT_BUTTON:
            return pressDotButton(state);
        case PRESS_TOGGLE_SIGN_BUTTON:
            return pressToggleSignButton(state, action);
        default: return state;
    }
}

const pressNumberButton = (state, action) => {
    let currentInput = state.currentInput.toString() + action.value;
    if (currentInput.substr(0, 1) === '0') {
        currentInput = currentInput.substr(1);
    }

    return {
        ...state,
        stack: [...state.stack],
        currentInput: currentInput,
        displayText: currentInput
    };
}

const pressBackspaceButton = (state) => {
    let currentInput = state.currentInput.substr(0, state.currentInput.length - 1);
    if(currentInput === '') {
        currentInput = '0';
    }
    return {
        ...state,
        stack: [...state.stack],
        currentInput: currentInput,
        displayText: currentInput
    }
}

const pressEqualsToButton = (state) => {
    let result = state.currentResult;
    let currentInput = Number(state.currentInput);
    let currentOperation = state.currentOperation;
    switch (currentOperation) {
        case '+':
            result = result + currentInput;
            break;
        case '-':
            result = result - currentInput;
            break;
        case 'x':
            result = result * currentInput;
            break;
        case '/':
            // TODO: handle divide by 0
            result = result / currentInput;
            break;
        default:
            result = currentInput;
            break;
    }
    return {
        ...initialState,
        currentResult: result,
        displayText: result
    }
}


const pressDotButton = (state) => {
    let currentInput = state.currentInput.toString() + '.';
    return {
        ...state,
        stack: [...state.stack],
        currentInput: currentInput,
        displayText: currentInput
    }
}

const pressToggleSignButton = (state, action) => {
    let currentInput = state.displayText;
    if (currentInput.toString().substr(0, 1) === '-') {
        currentInput = currentInput.toString().substr(1);
    } else {
        currentInput = '-' + currentInput;
    }

    return {
        ...state,
        stack: [...state.stack],
        currentInput: currentInput,
        displayText: currentInput
    }
}


const pressOperationButton = (state, action) => {
    let result = state.currentResult;
    let currentInput = state.currentInput;
    let displayText = state.displayText;
    const updatedStack = [...state.stack];


    let previousOperation = state.currentOperation;
    if (previousOperation && Number(state.currentInput) === 0) {
        updatedStack.pop();
    } else if (previousOperation) {
        // if previous operation is there, then perform that
        // store and display the result, clear the current input
        updatedStack.push(Number(currentInput));
        state = pressEqualsToButton(state);
        result = state.currentResult;
        currentInput = 0;
        displayText = result;
    } else {
        // if there is no previous operation,
        // then there can be 2 cases
        // 1. its a fresh calculation altogether
        // 2. its a fresh calculation after a equalsTo result
        if (result !== 0 && Number(state.currentInput) === 0) {
            updatedStack.push(result);
        } else {
            result = Number(state.currentInput);
            updatedStack.push(result);
        }
        currentInput = 0;
        displayText = 0;
    }

    updatedStack.push(action.value);


    return {
        ...state,
        stack: updatedStack,
        currentResult: result,
        currentInput: currentInput,
        displayText: displayText,
        currentOperation: action.value
    };
}
export default reducer;