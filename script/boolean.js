function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isZero(digit) {
    if (digit == '0') {
        return true
    }
    return false
}

function isOperator(digit) {
    if ('/*-+'.includes(digit)) {
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

function numberIncludes(number, digit) {
    number.includes(digit)
}