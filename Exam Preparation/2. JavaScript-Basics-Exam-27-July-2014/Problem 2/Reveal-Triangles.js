function solve(arr) {
    var matrix1 = [];
    var matrix2 = [];
    for (var i = 0; i < arr.length; i++) {
        matrix1[i] = arr[i].split('');
        matrix2[i] = arr[i].split('');
    }
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 1; j < matrix1[i].length; j++) {
            if (matrix1[i][j] == matrix1[i + 1][j - 1] &&
                matrix1[i][j] == matrix1[i + 1][j] &&
                matrix1[i][j] == matrix1[i + 1][j + 1]) {
                matrix2[i][j] = '*';
                matrix2[i + 1][j - 1] = '*';
                matrix2[i + 1][j] = '*';
                matrix2[i + 1][j + 1] = '*';
            }
        }
    }
    for (var i in matrix2) {
        console.log(matrix2[i].join(''));
    }
}
solve(['abcdexgh',
    'bbbdxxxh',
    'abcxxxxx'
]);
solve(['aа',
       'ааа',
       'aааа',
       'aаааа'
]);
solve(['ax',
    'xxx',
    'b',
    'bbb',
    'bbbb'
]);
solve(['dffdsgyefg',
    'ffffeyeee',
    'jbfffays',
    'dagfffdsss',
    'dfdfa',
    'dadaaadddf',
    'sdaaaaa',
    'daaaaaaasf'
    ]);