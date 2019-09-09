import React, {Component} from 'react';
import Aux from '../../hoc//Auxiliary/Auxiliary';
import DisplayPanel from '../../components/DisplayPanel/DisplayPanel';
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';

class CurrencyConverter extends Component {
    render() {
        return (
            <Aux>
                <DisplayPanel currentValue={this.props.displayText} stackValue={this.props.stack} />
                <ButtonsPanel isCurrencyConverter
                    onButtonPressed={this.onButtonPressed} />
            </Aux>
        );
    }
}

export default CurrencyConverter;