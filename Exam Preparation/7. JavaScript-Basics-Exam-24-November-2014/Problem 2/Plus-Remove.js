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
                j < arr[i].length - 1 &&
                arr[i][j + 1]  &&
                arr[i + 1][j + 2]  &&
                arr[i + 2][j + 1]  &&
                arr[i][j + 1].toUpperCase() == arr[i + 1][j].toUpperCase() &&
                arr[i][j + 1].toUpperCase() == arr[i + 1][j + 1].toUpperCase() &&
                arr[i][j + 1].toUpperCase() == arr[i + 1][j + 2].toUpperCase() &&
                arr[i][j + 1].toUpperCase() == arr[i + 2][j + 1].toUpperCase()) {
                output[i][j + 1] = false;
                output[i + 1][j] = false;
                output[i + 1][j + 1] = false;
                output[i + 1][j + 2] = false;
                output[i + 2][j + 1] = false;
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
solve(['@s@a@p@una',
       'p@@@@@@@@dna',
       '@6@t@*@*ego',
       'vdig*****ne6',
       'li??^*^*'
       ]);
solve(['888**t*',
       '8888ttt',
       '888ttt<<',
       '*8*0t>>hi'
       ]);
solve(['ab**l5',
       'bBb*555',
       'absh*5',
       'ttHHH',
       'ttth'
       ]);

solve([ 'freee',
        'eeeeeeee',
        'eeeeeeee',
        'yourself',
        'freeeeee',
        'yourselef'
]);

solve([ 'aAaAaAAaaaAaaAaAAaaAaaAaaAaAaAAaaaAaaAaAAaaAaaAaAaAaAAaaaAaaAaAAaaAaaA',
    'aAaAaAAaaaAaaAaAAaaAaaAaaAaAaAAaaaAaaAaAAaaAaaAaAaAaAAaaaAaaAaAAaaAaaA',
    'aAaAaAAaaaAaaAaAAaaAaaAaaAaAaAAaaaAaaAaAAaaAaaAaAaAaAAaaaAaaAaAAaaAaaA',
    'aAaAaAAaaaAaaAaAAaaAaaAaaAaAaAAaaaAaaAaAAaaAaaAaAaAaAAaaaAaaAaAAaaAaaA',
    'aAaAaAAaaaAaaAaAAaaAaaAaaAaAaAAaaaAaaAaAAaaAaaAaAaAaAAaaaAaaAaAAaaAaaA'
]);