function isPositiveNumber(n) {
    var floatN = parseFloat(n);
    return !isNaN(floatN) && isFinite(n) && floatN > 0
        && floatN % 1 == 0;
}

function promptInt(inMessage) {
    for (; ;) {
        numStr = prompt(inMessage)
        if (!isPositiveNumber(numStr)) {
            alert('Is not a number');
        } else {
            return parseInt(numStr)
        }
    }
}

function fibonacci(n) {
    if (n === 1) {
        alert(0);
    }

    curr = 0
    next = 1
    for (var i = 2; i < n; i++) {
        temp = curr + next
        curr = next
        next = temp
    }

    return next
}

n = promptInt('Enter n')



alert(fibonacci(n));