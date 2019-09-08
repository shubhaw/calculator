import {
    PRESS_C_BUTTON,
    PRESS_BACKSPACE_BUTTON,
    PRESS_NUMBER_BUTTON,
    PRESS_OPERATION_BUTTON,
    PRESS_EQUALS_TO_BUTTON
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
        default: return state;
    }
}

const pressNumberButton = (state, action) => {
    let currentInput = state.currentInput.toString() + action.value;
    if (currentInput.substr(0, 1) === '0') {
        currentInput = currentInput.substr(1);
    }
    const updatedStack = [...state.stack];
    updatedStack.push(action.value);
    return {
        ...state,
        stack: updatedStack,
        currentInput: currentInput,
        displayText: currentInput
    };
}

const pressBackspaceButton = (state) => {
    let currentInput = state.currentInput.substr(0, state.currentInput.length - 1);
    const stack = [...state.stack];
    stack.pop();
    return {
        ...state,
        stack: stack,
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

const pressOperationButton = (state, action) => {
    let result = state.currentResult;
    let currentInput = state.currentInput;
    let displayText = state.displayText;
    const updatedStack = [...state.stack];
    

    let previousOperation = state.currentOperation;
    if(previousOperation && Number(state.currentInput) === 0) {
        updatedStack.pop();
    }

    if(previousOperation) {
        state = pressEqualsToButton(state);
        result = state.currentResult;
        currentInput = 0;
        displayText = result;
    } else {
        if(result !== 0 && Number(state.currentInput) === 0) {
            updatedStack.push(result);
        } else {
            result = Number(state.currentInput);
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