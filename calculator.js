let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('input').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
    document.getElementById('input').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
