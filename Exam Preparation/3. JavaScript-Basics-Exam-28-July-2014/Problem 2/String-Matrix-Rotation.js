function solve(arr){
    var degrees = Number(arr[0].split(/\D+/g)[1]) % 360;
    arr.shift();
    var matrix = [];
    var maxLength = 0;
    for (var i in arr) {
        matrix[i] = arr[i].split('');
    }
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i].length > maxLength) {
            maxLength = matrix[i].length;
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var j = matrix[i].length; j < maxLength; j++) {
            matrix[i].push(' ');
        }
    }
    var output = '';
    switch (degrees){
        case 90:
            for (var i = 0; i < maxLength; i++) {
                output = '';
                for (var j = matrix.length-1; j >= 0; j--) {
                    output += matrix[j][i];
                }
                console.log(output);
            }
            break;
        case 180:
            for (var i = matrix.length-1; i >= 0; i--) {
                output = '';
                for (var j = maxLength-1; j >= 0; j--) {
                    output += matrix[i][j];
                }
                console.log(output);
            }
            break;
        case 270:
            for (var i = maxLength-1; i >= 0; i--) {
                output = '';
                for (var j = 0; j < matrix.length; j++) {
                    output += matrix[j][i];
                }
                console.log(output);
            }
            break;
        default:
            for (var i = 0; i < matrix.length; i++) {
                output = '';
                for (var j = 0; j < matrix[i].length; j++) {
                    output += matrix[i][j];
                }
                console.log(output);
            }
            break;
    }
}
solve(['Rotate(90)',
    'hello',
    'softuni',
    'exam'
]);
solve(['Rotate(180)',
    'hello',
    'softuni',
    'exam'
]);
solve(['Rotate(270)',
    'hello',
    'softuni',
    'exam'
]);
solve(['Rotate(360)',
    'hello',
    'softuni',
    'exam'
]);
solve(['Rotate(810)',
    'js',
    'exam'
]);
