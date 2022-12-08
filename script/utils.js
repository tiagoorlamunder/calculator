function returnsLastNumber(digits) {
    var lastNumber = ''
    for (d = digits.length - 1; d >= 0; d--) {
        if (isOperator(digits[d])) {
            return lastNumber
        }
        lastNumber = digits[d] + lastNumber
    }
    return lastNumber
}