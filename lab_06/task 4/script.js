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

day = promptInt('Enter day of month')
month = promptInt('Enter month number')


monthLengths = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
daysOfWeek = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')


dayOfYear = 0
for (var i = 0; i < month - 1; i++) {
    dayOfYear += monthLengths[i]
}
dayOfYear += day

dayOfWeek = (dayOfYear + 4) % 7 - 1

alert(daysOfWeek[dayOfWeek]);