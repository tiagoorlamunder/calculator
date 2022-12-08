function isNumber(digit) {
    if (digit == '1' || digit == '2' || digit == '3' || digit == '4' || digit == '5' || digit == '6' || digit == '7' || digit == '8' || digit == '9') {
        return true
    }
    return false
}

function isZero(digit) {
    if (digit == '0') {
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

function isDot(digit) {
    if (digit == '.') {
        return true
    }
    return false
}

function isEmpty(digit) {
    if (digit == '') {
        return true
    }
    return false
}

function returnsLastNumber(digits) {
    var lastNumber = ''
    for(d = digits.length - 1; d >= 0; d--) {
        if (isOperator(digits[d])) {
            return lastNumber
        } else {
            lastNumber += digits[d]
        }
    }
    return lastNumber
}

function clean() {
    document.getElementById('screen').innerText = ''
}

function insert(digit) {
    var digits = document.getElementById('screen').innerText
    var lastNumber = returnsLastNumber(digits)
    var lastDigit = digits.slice(-1)
    var lastButOneDigit = digits.slice(-2, -1)
    if ((isEmpty(digits) && (isOperator(digit) || isDot(digit))) || digits.length >= 18) {
        console.log()
    } else if (((isDot(lastDigit) && (isOperator(digit))) || (isDot(digit) && lastNumber.includes('.')))) {
        console.log()
    } else if ((isOperator(lastButOneDigit) && isZero(lastDigit) && isZero(digit))) {
        console.log()
    } else if ((isOperator(lastDigit) && isDot(digit))) {
        console.log()
    } else {
        if (isOperator(lastDigit) && isOperator(digit)) {
            document.getElementById('screen').innerText = digits.slice(0, -1) + digit
        } else if (isOperator(lastButOneDigit) && isZero(lastDigit) && digit != '.') {
            document.getElementById('screen').innerText = digits.slice(0, -1) + digit
        } else if (digits == '0' && digit != '.') {
            document.getElementById('screen').innerText = digits.slice(0, -1) + digit
        } else {
            document.getElementById('screen').innerText += digit
        }
    }
}

function calculate() {
    var digits = document.getElementById('screen').innerText
    if (!digits == '') {
        document.getElementById('screen').innerText = eval(digits)
    }
}