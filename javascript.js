num1 = ''
num2 = ''
operator = ''
total = ''
let finishedCalculation = false;
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
            if (num2 == 0) {
                return "ERROR";
            }
            return num1 / num2; 
            break;
    }
}
const buttonContainer = document.querySelector('.buttonContainer');
const operatorContainer = document.querySelector('.operatorContainer') 
const displayContainer = document.querySelector('.display')


// Show Current Values (Prototyping)
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

// Calculator Number  Display
const calculatorDisplay = document.createElement('p');
calculatorDisplay.innerText = `0`;

// Calculator Current Operator Display
const operatorDisplay = document.createElement('p');
operatorDisplay.innerText = "\u00A0";

displayContainer.appendChild(operatorDisplay);
displayContainer.appendChild(calculatorDisplay);

// Function Declaration
function inputDigit(i) {
        if(!operator && !finishedCalculation) {
            num1+=i;
            numOneSign.innerText = `First Number: ${num1}`;
            calculatorDisplay.innerText = numOneSign.innerText;
        }
        else if(!operator && finishedCalculation) {
            num1 = '';
            num1+= i;
            finishedCalculation = false;
            numOneSign.innerText = `First Number: ${num1}`;
            calculatorDisplay.innerText = numOneSign.innerText;
        } else if (operator) {
            num2+=i;
            numTwoSign.innerText = `Second Number: ${num2}`;
            calculatorDisplay.innerText = numTwoSign.innerText;
        }
}

function inputDecimal(){
        if(!operator) {
            if (num1.includes('.')) {
                return
            }
            num1+='.';
            numOneSign.innerText = `First Number: ${num1}`;
            calculatorDisplay.innerText = numOneSign.innerText;

        } else if (operator) {
            if (num2.includes('.')) {
                return
            }
            num2+='.';
            numTwoSign.innerText = `Second Number: ${num2}`;
            calculatorDisplay.innerText = numTwoSign.innerText;}
        }

function inputOperator(event) {
    
        if (!num1){
            return
        }
        if (num2) {
            total = operate(num1, operator, num2)
            totalSign.innerText = `Total: ${total}`
            operatorDisplay.innerText = operatorSign.innerText;
            calculatorDisplay.innerText = totalSign.innerText;
            num1 = total;
            numOneSign.innerText = `First Number: ${num1}`;
            num2 = '';
            numTwoSign.innerText = `Second Number: ${num2}`;
        }
        operator = event.target.innerText;
        operatorSign.innerText = `Operator: ${operator}`;
        operatorDisplay.innerText = operatorSign.innerText;
        
    }

function inputEqual() {
    if (!num1||!num2) {
        return 
    }
    total = operate(num1, operator, num2);
    totalSign.innerText = `Total: ${total}`
    calculatorDisplay.innerText = totalSign.innerText;
    num1 = total;
    numOneSign.innerText = `First Number: ${total}`;
    num2 = '';
    numTwoSign.innerText = `Second Number: ${num2}`;
    operator = '';
    operatorSign.innerText = `Operator: ${operator}`;
    operatorDisplay.innerText = operatorSign.innerText; 
    finishedCalculation = true;
    
}

function inputClear() {
    num1 = '';
    numOneSign.innerText = `First Number: ${num1}`;
    num2 = '';
    numTwoSign.innerText = `Second Number: ${num2}`;
    operator = '';
    operatorSign.innerText = `Operator: ${operator}`;
    total = ``;
    totalSign.innerText = `Total: ${operator}`;
    calculatorDisplay.innerText = `0`;
    finishedCalculation = false;

}

function inputBackspace() {
    if(num1 && !operator) {
        console.log("backspace num1");
        num1 = num1.slice(0,num1.length-1);
        numOneSign.innerText = `First Number: ${num1}`;
        calculatorDisplay.innerText = numOneSign.innerText
    } else if (operator && num2) {
        console.log("backspace num2");
        num2 = num2.slice(0,num2.length-1);
        numTwoSign.innerText = `Second Number: ${num2}`;
        calculatorDisplay.innerText = numTwoSign.innerText
    } else {
        console.log("nothing to backspace!");
    }
}

// Create 10 Buttons for digits
for (let i = 0; i < 10; i++) {
    // Build Brick
    const digitButton = document.createElement('button');
    digitButton.setAttribute("class", "digitButton");
    digitButton.innerText = i;
    digitButton.addEventListener("click", () => inputDigit(i))
    
    buttonContainer.appendChild(digitButton);
}

const decimalButton = document.createElement('button');
decimalButton.setAttribute("class", "digitButton");
decimalButton.innerText = '.';
decimalButton.addEventListener("click", () => {
        inputDecimal()
        }
    )

    
buttonContainer.appendChild(decimalButton)

// Operator Algorithm
const operatorButtonNodeList = document.querySelectorAll('.operator');
const operatorButtonArray = [...operatorButtonNodeList]

// console.log(operatorButtonArray);
// Changes the value of the operator
for (const operatorButton of operatorButtonArray) {
    operatorButton.addEventListener("click", (event) => {
        inputOperator(event)
        
    }); 
}

const equalButton = document.querySelector('.equal');
equalButton.addEventListener("click", () => {
    inputEqual()
});


// Clear Button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener("click", () => {
    inputClear();
})

//Backspace Button
const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener("click", () =>{
    inputBackspace();
})

const digits = '1234567890';
const operatorCharacter = '*/+-';
//Keyboard Support
window.onkeydown = ((e) => {
    if(!operator && digits.includes(e.key) && !finishedCalculation) {
        num1+=e.key;
        numOneSign.innerText = `First Number: ${num1}`;
        calculatorDisplay.innerText = numOneSign.innerText;

    }else if(!operator && finishedCalculation) {
            num1 = '';
            num1+= e.key;
            finishedCalculation = false;
            numOneSign.innerText = `First Number: ${num1}`;
            calculatorDisplay.innerText = numOneSign.innerText;
        }
         else if (operator && digits.includes(e.key)) {
        num2+=e.key;
        numTwoSign.innerText = `Second Number: ${num2}`;
        calculatorDisplay.innerText = numTwoSign.innerText;
    } 
        else if (!num1 && operatorCharacter.includes(e.key)){
            return
        }
        else if (num2 && operatorCharacter.includes(e.key)) {
            total = operate(num1, operator, num2)
            totalSign.innerText = `Total: ${total}`
            operatorDisplay.innerText = operatorSign.innerText;
            calculatorDisplay.innerText = totalSign.innerText;
            num1 = total;
            numOneSign.innerText = `First Number: ${num1}`;
            num2 = '';
            numTwoSign.innerText = `Second Number: ${num2}`;
        }
    else if (num1 && operatorCharacter.includes(e.key)) {
        operator = e.key;
        operatorSign.innerText = `Operator: ${operator}`;
        operatorDisplay.innerText = operatorSign.innerText;
    }
    else if ((!num1||!num2) && (e.key == '=' || e.key ==='Enter')) {
        return 
    } 
    else if (e.key === '=' || e.key === 'Enter'){
        inputEqual();
    }
    else if (e.key === 'Escape') {
        inputClear()
    }
    else if (e.key === 'Backspace') {

    if(num1 && !operator) {
        inputBackspace();
    }

}
})

