function solve(arr){
    var maxSum = -1000000;
    for (var i = 2; i < arr.length-1; i++) {
        var regex = /<tr><td>.*?<\/td><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g;
        var match = regex.exec(arr[i]);
        var store1 = match[1] != '-' ? Number(match[1]) : 0;
        var store2 = match[2] != '-' ? Number(match[2]) : 0;
        var store3 = match[3] != '-' ? Number(match[3]) : 0;

        var sum = store1 + store2 + store3;
        if (sum > maxSum) {
            maxSum = sum;
            var output;

            if (match[1] =='-') {
                output = match[2] + ' + ' + match[3];
            }else if (match[2] == '-'){
                output = match[1] + ' + ' + match[3];
            }else if (match[3] == '-'){
                output = match[1] + ' + ' + match[2];
            }else{
                output = match[1] + ' + ' + match[2] + ' + ' + match[3];
            }

            if (match[3] == '-' && match[2] == '-'){
                output = match[1];
            }else if (match[1] == '-' && match[2] == '-'){
                output = match[3];
            }else if (match[1] == '-' && match[3] == '-'){
                output = match[2];
            }
        }
    }
    if (match[1] == '-' && match[2] == '-' && match[3] == '-') {
        console.log('no data');
    }else{
        console.log(maxSum + ' = ' + output);
    }
}
solve([ '<table>',
        '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
        '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
        '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
        '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
        '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
        '</table>'
]);
solve([ '<table>',
        '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
        '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
        '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
        '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
        '</table>'
]);
