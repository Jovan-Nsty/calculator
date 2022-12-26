const display = document.getElementById('display')
const btnNumber = document.querySelectorAll('.number')
const btnOperator = document.querySelectorAll('.operator')
const btnEquals = document.getElementById('equals')
const btnClear = document.getElementById('clear')
const btnPosNeg = document.getElementById('pos-neg')
const btnDecimal = document.getElementById('decimal')

let numberStorage = ''
let operatorSymbol = ''
let operatorCount = 0
let operandOne = 0
let operandTwo = 0
let result = 0
let positiveNegativeCounter = 0
let decimalCounter = 0

// convert number to decimal
btnDecimal.addEventListener('click', () => {
    if (decimalCounter < 1) {
        numberStorage = numberStorage.concat('.')
        displayOutput(numberStorage)
        decimalCounter++
    }
})

// convert number to positive or negative
btnPosNeg.addEventListener('click', () => {
    positiveNegativeCounter++
    if (positiveNegativeCounter % 2 !== 0) {
        numberStorage = '-'.concat(numberStorage)
        displayOutput(numberStorage)
    } else {
        numberStorage = numberStorage.slice(1)
        displayOutput(numberStorage)
    }
})

// track pressed numbers
btnNumber.forEach((button) => {
    button.addEventListener('click', () => {
        positiveNegativeCounter = 0
        numberStorage += button.innerText
        displayOutput(numberStorage)
    })
})

// define operator and set first operand
btnOperator.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorCount++
        decimalCounter = 0
        if (operatorCount > 1) {
            pairEvaluation(operator)
        } else {
            setOperator(operator.innerText)
            setOperandOne(numberStorage)
            numberStorage = ''
        }
    })
})

// define second operand and do the calculation
btnEquals.addEventListener('click', () => {
    setOperandTwo(numberStorage)
    decimalCounter = 0
    result = operate(operatorSymbol, operandOne, operandTwo)
    checkUndefined(result)
})

function checkUndefined(value) {
    if (value === undefined) {
        return 0
    } else {
        displayOutput(value)
    }
}

// clear display
btnClear.addEventListener('click', () => clear())

function clear() {
    setOperandOne(0)
    setOperandTwo(0)
    setOperator('')
    displayOutput(0)
    operatorCount = 0
    decimalCounter = 0
    numberStorage = ''
}

// string together several operations
function pairEvaluation(operation) {
    let temp = numberStorage
    if (temp.length <= 0) {
        return
    } else {
        temp = parseInt(numberStorage)
        let result = operate(operatorSymbol, operandOne, temp)
        setOperator(operation.innerText)
        setOperandOne(result)
        displayOutput(result)
        numberStorage = ''
    }
}

// set values
function setOperandOne(value) {
    if (numberStorage === '') {
        operandOne = 0
    } else {
        operandOne = parseFloat(value)
    }
}

function setOperandTwo(value) {
    if (numberStorage === '') {
        operandTwo = 0
    } else {
        operandTwo = parseFloat(value)
    }
}

function setOperator(value) {
    operatorSymbol = value
}

// display content
function displayOutput(string) {
    display.innerText = string
}

// basic math functions
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return 'Division with 0 not possible'
    } else {
        return a / b
    }
}

// main operate function
function operate(operator, operandOne, operandTwo) {
    switch (operator) {
        case '+':
            return add(operandOne, operandTwo)
        case '-':
            return subtract(operandOne, operandTwo)
        case '*':
            return multiply(operandOne, operandTwo)
        case '/':
            return divide(operandOne, operandTwo)
    }
}