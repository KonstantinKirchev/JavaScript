function solve(arr){
    var countI = 0,
        countL = 0,
        countJ = 0,
        countO = 0,
        countZ = 0,
        countS = 0,
        countT = 0
        ;
    for (var i = 0; i < arr.length; i += 1) {
        for (var j = 0; j < arr[i].length; j += 1) {
            if (i < arr.length-3 &&
                arr[i][j]=='o' &&
                arr[i+1][j]=='o' &&
                arr[i+2][j]=='o' &&
                arr[i+3][j]=='o') {
                countI++;
            }
            if (i < arr.length-2 &&
                j < arr[i].length-1 &&
                arr[i][j]=='o' &&
                arr[i+1][j]=='o' &&
                arr[i+2][j]=='o' &&
                arr[i+2][j+1]=='o') {
                countL++;
            }
            if (i < arr.length-2 &&
                j < arr[i].length-1 &&
                arr[i][j+1]=='o' &&
                arr[i+1][j+1]=='o' &&
                arr[i+2][j+1]=='o' &&
                arr[i+2][j]=='o') {
                countJ++;
            }
            if (i < arr.length-1 &&
                j < arr[i].length-1 &&
                arr[i][j]=='o' &&
                arr[i][j+1]=='o' &&
                arr[i+1][j]=='o' &&
                arr[i+1][j+1]=='o') {
                countO++;
            }
            if (i < arr.length-1 &&
                j < arr[i].length-1 &&
                arr[i][j]=='o' &&
                arr[i][j+1]=='o' &&
                arr[i+1][j+1]=='o' &&
                arr[i+1][j+2]=='o') {
                countZ++;
            }
            if (i < arr.length-1 &&
                j < arr[i].length-1 &&
                arr[i][j+1]=='o' &&
                arr[i][j+2]=='o' &&
                arr[i+1][j]=='o' &&
                arr[i+1][j+1]=='o') {
                countS++;
            }
            if (i < arr.length-1 &&
                j < arr[i].length-1 &&
                arr[i][j]=='o' &&
                arr[i][j+1]=='o' &&
                arr[i][j+2]=='o' &&
                arr[i+1][j+1]=='o') {
                countT++;
            }
        }
    }
    var output = '{'+'"I":'+countI+',"L":'+countL+',"J":'+countJ+',"O":'+countO+',"Z":'+countZ+',"S":'+countS+',"T":'+countT+'}';
    console.log(output);
}
solve(['--o--o-',
       '--oo-oo',
       'ooo-oo-',
       '-ooooo-',
       '---oo--'
]);
solve(['-oo',
       'ooo',
       'ooo'
]);