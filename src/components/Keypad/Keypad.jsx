import React from 'react';
import PropTypes from 'prop-types';
import Key from '../Key/Key';
import './Keypad.css';

const Keypad = ({ callOperator, handleKeyPress,  numbers, operators, setOperator, updateDisplay }) => {
    
    const numberKeys = numbers.map((num, i) => (
        <Key
            handleKeyPress={handleKeyPress}
            key={`${num}${i}`}
            keyAction={updateDisplay}
            keyType="number-key"
            keyValue={num}
        />)
    );
    const operatorKeys = operators.map((op, i) => (
        <Key
            handleKeyPress={handleKeyPress}
            key={`${op}${i}`}
            keyAction={setOperator}
            keyType="operator-key"
            keyValue={op}
        />)
    );
    
    return (
        <div className="keypad-container">
            <div className="numbers-container">
                {numberKeys}
            </div>
            <div className="operators-container">
                {operatorKeys}
            </div>
            <div className="submit-container">
                <Key
                    handleKeyPress={handleKeyPress}
                    keyAction={callOperator}
                    keyType="submit-key"
                    keyValue="="
                />
            </div>
        </div>
    );
}

Keypad.propTypes = {
    callOperator: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    numbers: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    setOperator: PropTypes.func.isRequired,
    updateDisplay: PropTypes.func.isRequired,
}

Keypad.defaultProps = {
    numbers: [],
    operators: [],
}

export default Keypad;