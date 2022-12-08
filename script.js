function isNumber(digit) {
    if (digit == '1' || digit == '2' || digit == '3' || digit == '4' || digit == '5' || digit == '6' || digit == '7' || digit == '8' || digit == '9') {
        return true
    }
    return false
}

function isOperator(digit) {
    if (digit == '*' || digit == '/' || digit == '+' || digit == '-') {
        return true
    }
    return false
}

function isDot(digit) {
    if (digit == '.') {
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