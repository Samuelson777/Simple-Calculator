const display = document.getElementById('display') as HTMLInputElement;
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear') as HTMLButtonElement;
const equalsButton = document.getElementById('equals') as HTMLButtonElement;

let currentInput: string = '';
let operator: string | null = null;
let firstOperand: number | null = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = (button as HTMLButtonElement).dataset.value;
        if (value) {
            if (value === '+' || value === '-' || value === '*' || value === '/') {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    firstOperand = null;
    operator = null;
    display.value = '';
});

equalsButton.addEventListener('click', () => {
    if (firstOperand !== null && operator && currentInput) {
        const secondOperand = parseFloat(currentInput);
        let result: number | null = null;

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