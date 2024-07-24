let radianMode = true;

function clearDisplay() {
    document.getElementById('result').value = '';
}

function clearEntry() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.slice(0, 0);
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function toggleRadDec() {
    radianMode = !radianMode;
    let mode = radianMode ? 'Rad' : 'Dec';
    alert(`Switched to ${mode} mode`);
}

function calculate() {
    let expression = document.getElementById('result').value;
    
    // Replace the caret symbol with exponentiation
    expression = expression.replace(/\^/g, '**');

    // Replace the pi and e symbols
    expression = expression.replace(/pi/g, 'Math.PI');
    expression = expression.replace(/e/g, 'Math.E');

    // Replace square root, trigonometric and logarithmic functions
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
    expression = expression.replace(/sin\(/g, `Math.sin(${radianMode ? '' : 'Math.PI/180*'}`);
    expression = expression.replace(/cos\(/g, `Math.cos(${radianMode ? '' : 'Math.PI/180*'}`);
    expression = expression.replace(/tan\(/g, `Math.tan(${radianMode ? '' : 'Math.PI/180*'}`);
    expression = expression.replace(/log\(/g, 'Math.log10(');
    expression = expression.replace(/ln\(/g, 'Math.log(');

    try {
        document.getElementById('result').value = eval(expression);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
