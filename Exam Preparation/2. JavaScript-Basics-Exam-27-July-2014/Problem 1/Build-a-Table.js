function solve(arr){
    var output = '<table>\n' + '<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';
    var start = Number(arr[0]);
    var end = Number(arr[1]);
    for (var i = start; i <= end; i++) {
        var num = i;
        var doubleNum = i * i;
        var isFib = '';
        if (Math.sqrt((5 * num * num) + 4) % 1 == 0
        || Math.sqrt((5 * num * num) - 4) % 1 == 0) {
            isFib = 'yes';
        }else{
            isFib = 'no';
        }
        output += '<tr><td>'+num+'</td><td>'+doubleNum+'</td><td>'+isFib+'</td></tr>\n';
    }
    output += '</table>';
    console.log(output);
}
solve([ '2', '6' ]);
