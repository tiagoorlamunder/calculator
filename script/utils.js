function returnLastNumber(digits) {
    var lastNumber = ''
    for (d = digits.length - 1; d >= 0; d--) {
        if (isOperator(digits[d])) {
            return lastNumber
        }
        lastNumber = digits[d] + lastNumber
    }
    return lastNumber
}

function returnStatus() {
    var button = document.getElementById('on/off').innerText
    if (button == 'O') {
        return 'on'
    }
    else if (button == '|') {
        return 'off'
    }
}

function removeLastNumber(digits){
    rest = digits
    for (d = digits.length - 1; d >= 0; d--) {
        rest = rest.slice(0, -1)
        digit = digits[d]
        console.log('digits: ' + digits)
        console.log('digit: ' + digit)
        console.log('d: ' + d)
      if (isOperator(digit)){
            return rest
        }
    }
    return rest
}