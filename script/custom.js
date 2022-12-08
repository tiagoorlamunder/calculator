function returnsLastNumber(digits) {
    var lastNumber = ''
    for (d = digits.length - 1; d >= 0; d--) {
        if (isOperator(digits[d])) {
            return lastNumber
        } else {
            lastNumber += digits[d]
        }
    }
    return lastNumber
}

function insert(digit) {
    var digits = document.getElementById('screen').innerText
    var lastNumber = returnsLastNumber(digits)
    var lastDigit = digits.slice(-1)
    var lastButOneDigit = digits.slice(-2, -1)
    if (digits.length >= 18) {
        console.log()
    } else if (isEmpty(digits) && isDot(digit)) {
        console.log()
    } else if (isEmpty(digits) && isOperator(digit)) {
        console.log()
    } else if (isDot(lastDigit) && (isOperator(digit))) {
        console.log()
    } else if (isDot(digit) && numberIncludes(lastNumber, '.')) {
        console.log()
    } else if (isOperator(lastButOneDigit) && isZero(lastDigit) && isZero(digit)) {
        console.log()
    } else if (isOperator(lastDigit) && isDot(digit)) {
        console.log()
    } else {
        if (isOperator(lastDigit) && isOperator(digit)) {
            document.getElementById('screen').innerText = digits.slice(0, -1) + digit
        } else if (isOperator(lastButOneDigit) && isZero(lastDigit) && isNumber(digit)) {
            document.getElementById('screen').innerText = digits.slice(0, -1) + digit
        } else if (isZero(digits) && isNumber(digit)) {
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