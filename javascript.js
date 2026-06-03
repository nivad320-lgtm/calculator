num1 = '1'
num2 = '1'
operator = '*'

function operate(num1,operator,num2) {
    switch(operator) {
        case '+':
            return num1 + num2; 
            break;
        case '-':
            return num1 - num2; 
            break;
        case '*':
            return num1 * num2; 
            break;
        case '/':
            return num1 / num2; 
            break;
    }
}

console.log(operate(num1,operator,num2));