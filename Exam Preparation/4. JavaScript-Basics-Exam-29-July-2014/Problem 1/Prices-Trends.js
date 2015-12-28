function solve(arr){
    var output = '<table>\n' + '<tr><th>Price</th><th>Trend</th></tr>\n';;
    for (var i in arr) {
        arr[i] = Number(arr[i]).toFixed(2);
    }
    output += '<tr><td>'+arr[0]+'</td><td><img src="fixed.png"/></td></tr>\n';
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1]==arr[i]) {
            output += '<tr><td>'+arr[i]+'</td><td><img src="fixed.png"/></td></tr>\n';
        }else if (arr[i-1]>arr[i]) {
            output += '<tr><td>'+arr[i]+'</td><td><img src="down.png"/></td></tr>\n';
        }else if (arr[i-1]<arr[i]) {
            output += '<tr><td>'+arr[i]+'</td><td><img src="up.png"/></td></tr>\n';
        }
    }
    output += '</table>';
    console.log(output);
}
solve(['36.333',
    '36.5',
    '37.019',
    '35.4',
    '35',
    '35.001',
    '36.225'
]);
