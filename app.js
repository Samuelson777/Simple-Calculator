var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');
var clearButton = document.getElementById('clear');
var equalsButton = document.getElementById('equals');
var currentInput = '';
var operator = null;
var firstOperand = null;
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = button.dataset.value;
        if (value) {
            if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            }
            else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});
clearButton.addEventListener('click', function () {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.value = '';
});
equalsButton.addEventListener('click', function () {
    if (firstOperand !== null && operator && currentInput) {
        var secondOperand = parseFloat(currentInput);
        var result = null;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        if (result !== null) {
            display.value = result.toString();
            currentInput = '';
            firstOperand = null;
            operator = null;
        }
    }
});
