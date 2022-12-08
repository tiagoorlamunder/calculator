function isNumber(digit) {
    if (digit == 'one' || digit == 'two' || digit == 'three' || digit == 'four' || digit == 'five' || digit == 'six' || digit == 'seven' || digit == 'eigth' || digit == 'nine') {
        return true
    }
    return false
}

function isOperator(digit) {
    if (digit == 'multiplication' || digit == 'division' || digit == 'addition' || digit == 'subtraction') {
        return true
    }
    return false
}

function isDot(digit) {
    if (digit == 'dot') {
        return true
    }
    return false
}

function clean() {
    document.getElementById('screen').innerText = ''
}

function insert(digit) {
    var digits = document.getElementById('screen').innerText
    var digit = document.getElementById(digit).innerText
    if (digits.length < 18) {
        document.getElementById('screen').innerText += digit
    }
}

function calculate() {
    var digits = document.getElementById('screen').innerText
    document.getElementById('screen').innerText = eval(digits)
}