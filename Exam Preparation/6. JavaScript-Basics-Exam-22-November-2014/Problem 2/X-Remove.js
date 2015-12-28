function solve(arr) {
    var output = [], i, j,
        out = '',
        arg = [];
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            output[i] = arr[i].split('');
            arg[i] = arr[i].split('');
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            output[i][j] = true;
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i < arr.length - 2 &&
                j < arr[i].length - 2 &&
                arr[i][j + 2] &&
                arr[i + 1][j + 1] &&
                arr[i + 2][j + 2]  &&
                arr[i][j].toUpperCase() == arr[i][j + 2].toUpperCase() &&
                arr[i][j].toUpperCase() == arr[i + 1][j + 1].toUpperCase() &&
                arr[i][j].toUpperCase() == arr[i + 2][j].toUpperCase() &&
                arr[i][j].toUpperCase() == arr[i + 2][j + 2].toUpperCase()) {
                output[i][j] = false;
                output[i][j + 2] = false;
                output[i + 1][j + 1] = false;
                output[i + 2][j] = false;
                output[i + 2][j + 2] = false;
            }
        }
    }
    for (i = 0; i < output.length; i++) {
        for (j = 0; j < output[i].length; j++) {
            if (output[i][j]) {
                out += arg[i][j];
            }
        }
        console.log(out);
        out = '';
    }

}
solve(['puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
]);
solve(['8888888',
    '08*8*80',
    '808*888',
    '0**8*8?'
]);
