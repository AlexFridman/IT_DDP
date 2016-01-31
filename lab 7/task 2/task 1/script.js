function checkNumber(value) {
    return typeof value == 'number';
}

function typeCheck(f) {
    return function() {
        if (arguments.length > 0) {
            if (!checkNumber(arguments[0])) {
                alert("Argument is not a number");
                return;
            }
        }

        return f.apply(this, arguments);
    }
}

function sum(a, b) {
    return a + b;
}

sum = typeCheck(sum);

alert(sum(1, 2)); // 3

sum(true, null); // incorrect argument