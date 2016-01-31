function isPositiveNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0;
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function output(matrix) {
    return matrix.join('\n');
}

function createMatrix(colNum, rowNum) {
    if (!isPositiveNumber(colNum) || !isPositiveNumber(rowNum)) {
        alert("one of the dimension is not a positive number");
    }

    var array = new Array(rowNum);

    for (var i = 0; i < rowNum; i++) {
        array[i] = new Array(colNum);
    }
    for (var i = 0; i < colNum; i++) {
        for (j = 0; j < rowNum; j++) {
            array[i][j] = getRandomNumber(0, 100);
        }
    }

    return array;
}

function sum(matrix1, matrix2) {
    if (matrix1.length != matrix2.length || matrix1[0].length != matrix2[0].length) {
        alert("matrixes have differents dimensions");
    }
    colNum = matrix1[0].length;
    rowNum = matrix1.length;

    var matrix = new Array(rowNum);

    for (var i = 0; i < rowNum; i++) {
        matrix[i] = new Array(colNum);
    }
    for (var i = 0; i < colNum; i++) {
        for (j = 0; j < rowNum; j++) {
            matrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return matrix;
}

matrix1 = createMatrix(2, 2);
alert(output(matrix1));

matrix2 = createMatrix(2, 2);
alert(output(matrix2));

alert(output(sum(matrix1, matrix2)));