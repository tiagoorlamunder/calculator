function insert(digit) {
    var digits = document.getElementById('screen').innerText
    var lastNumber = returnsLastNumber(digits)
    var lastDigit = digits.slice(-1)
    var lastButOneDigit = digits.slice(-2, -1)
    if (digits.length >= 22) {
        console.log('This digit cannot be typed now...')
    } else if (hasLyrics(digits)) {
        console.log('This digit cannot be typed now...')
    } else if (isEmpty(digits) && isDot(digit)) {
        console.log('This digit cannot be typed now...')
    } else if (isEmpty(digits) && isOperator(digit)) {
        console.log('This digit cannot be typed now...')
    } else if (isDot(lastDigit) && (isOperator(digit))) {
        console.log('This digit cannot be typed now...')
    } else if (isDot(digit) && numberIncludes(lastNumber, '.')) {
        console.log('This digit cannot be typed now...')
    } else if (isOperator(lastButOneDigit) && isZero(lastDigit) && isZero(digit)) {
        console.log('This digit cannot be typed now...')
    } else if (isOperator(lastDigit) && isDot(digit)) {
        console.log('This digit cannot be typed now...')
    } else {
        if (isOperator(lastDigit) && isOperator(digit)) {
            if (digit == lastDigit) {
                console.log('This digit cannot be typed now...')
            } else {
                document.getElementById('screen').innerText = digits.slice(0, -1) + digit
            }
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
    document.getElementById('screen').innerText = eval(digits)
}