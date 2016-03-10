function isPositiveInteger(n) {
    var floatN = parseFloat(n);
    return !isNaN(floatN) && isFinite(n) && floatN > 0
        && floatN % 1 == 0;
}

function promptInt(inMessage) {
    for (; ;) {
        numStr = prompt(inMessage)
        if (!isPositiveInteger(numStr)) {
            alert('Is not a number');
        } else {
            return parseInt(numStr)
        }
    }
}

floorCount = promptInt('Enter floor count:');
porchCount = promptInt('Enter porch count:');
flatPerFloor = promptInt('Enter count of flat per floor count:');

flatNum = promptInt('Enter flat number:')

temp = Math.ceil(flatNum / (floorCount * flatPerFloor))

if (temp <= porchCount) {
    alert(temp);
} else {
    alert('There is no flat in this house with such number');
}