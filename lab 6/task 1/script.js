function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

for (; ;) {
    num1Str = prompt('Enter 1st number:')
    num2Str = prompt('Enter 2nd number:')

    if (!isNumber(num1Str)) {
        alert('1st input is not a number');
        break;
    }
    if (!isNumber(num2Str)) {
        alert('2st input is not a number');
        break;
    }

    num1 = parseInt(num1Str)
    num2 = parseInt(num2Str)

    if (num1 > num2) {
        alert('1st is greather than 2nd');
    } else if (num1 < num2) {
        alert('1st is lower than 2nd');
    } else {
        alert('1st is equal to 2nd');
    }
}