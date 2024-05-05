let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function operation(operator) {
    if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '') {
        let result;
        try {
            result = eval(displayValue);
            if (!isFinite(result)) {
                throw "Invalid operation";
            }
            document.getElementById('display').value = result;
            displayValue = result.toString();
        } catch (error) {
            document.getElementById('display').value = 'Error';
            displayValue = '';
        }
    }
}
