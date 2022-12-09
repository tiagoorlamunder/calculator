function calculate() {
    var digits = document.getElementById('screen').innerText
    if (digits != '')
    document.getElementById('screen').innerText = eval(digits)
}

function insert(digit) {
    var status = returnStatus()
    var digits = document.getElementById('screen').innerText
    var lastNumber = returnLastNumber(digits)
    var lastDigit = digits.slice(-1)
    var lastButOneDigit = digits.slice(-2, -1)
    if (digit == 'on/off') {
        var status = document.getElementById('on/off').innerText
        if (status == 'O') {
            document.getElementById('on/off').innerText = '|'
            document.getElementById('screen').innerText = ''
        } else if (status == '|') {
            document.getElementById('on/off').innerText = 'O'
            document.getElementById('screen').innerText = 0
        }
    } else if (status == 'off') {
        console.log('This digit cannot be typed now...')
    } else if (digit == 'C') {
        document.getElementById('screen').innerText = '0'
    } else if (digit == 'CE') {
        if (digits == lastNumber) {
            document.getElementById('screen').innerText = '0'
        } else {
            document.getElementById('screen').innerText = removeLastNumber(digits)
        }
    } else if (hasLyrics(digits)) {
        console.log('This digit cannot be typed now...')
    } else if (digit == '<') {
        if (digits.length == 1) {
            document.getElementById('screen').innerText = '0'
        } else {
            document.getElementById('screen').innerText = digits.slice(0, -1)
        }
    } else if (digits.length >= 22) {
        console.log('This digit cannot be typed now...')
    } else if (digits.length >= 21 && isOperator(digit)) {
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