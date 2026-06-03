num1 = ''
num2 = ''
operator = ''
total = ''

function operate(num1,operator,num2) {
    num1 = Number(num1);
    num2 = Number(num2);
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
const buttonContainer = document.querySelector('.buttonContainer');
const operatorContainer = document.querySelector('operatorContainer') 

// Display Current Values (Prototyping)
const currentValueContainer = document.querySelector('.currentValueContainer')
const numOneSign = document.createElement('p');
numOneSign.innerText = `First Number: ${num1}`;
const operatorSign = document.createElement('p');
operatorSign.innerText = `Operator: ${operator}`;
const numTwoSign = document.createElement('p');
numTwoSign.innerText = `Second Number: ${num2}`;

// Display Total
const totalSign = document.createElement('p');
totalSign.innerText = `Total: ${total}`

currentValueContainer.appendChild(numOneSign);
currentValueContainer.appendChild(operatorSign);
currentValueContainer.appendChild(numTwoSign);
currentValueContainer.appendChild(totalSign);


// Create 10 Buttons for digits
for (let i = 0; i < 10; i++) {
    // Build Brick
    const digitButton = document.createElement('button');
    digitButton.setAttribute("class", "digitButton");
    digitButton.innerText = i;
    digitButton.addEventListener("click", () => {
        if(!operator) {
            num1+=i;
            numOneSign.innerText = `First Number ${num1}`;
        } else if (operator) {
            num2+=i;
            numTwoSign.innerText = `Second Number ${num2}`;
        }
    })
    
    buttonContainer.appendChild(digitButton);
}

// Operator Algorithm
const operatorButtonNodeList = document.querySelectorAll('.operator');
const operatorButtonArray = [...operatorButtonNodeList]

// console.log(operatorButtonArray);
// Changes the value of the operator
for (const operatorButton of operatorButtonArray) {
    operatorButton.addEventListener("click", (event) => {
        operator = event.target.innerText;
        operatorSign.innerText = `Operator : ${operator}`;
    }); 
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener("click", () => {
    total = operate(num1, operator, num2);
    totalSign.innerText = `Total: ${total}`
    num1 = '';
    numOneSign.innerText = `First Number ${num1}`;
    num2 = '';
    numTwoSign.innerText = `Second Number ${num2}`;
    operator = '';
    operatorSign.innerText = `Operator : ${operator}`;
});


// Clear Button

