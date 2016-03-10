function checkType(value, type) {
    return typeof value == type;
}

function checkTypes(f, type) {
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            if (!checkType(arguments[i], type)) {
                console.log("Incorrect argument type of " + arguments[i]);
                return;
            }
        }

        return f.apply(this, arguments);
    }
}

function sumOfThree(a, b, c) {
    return a * b * c;
}

sumOfThree = checkTypes(sumOfThree, 'number');

console.log(sumOfThree(1, 2, 3));

console.log(sumOfThree(1, 2, 'pp'));