function solve(arr){
    var rows = [];
    var obj = {};
    for (var i = 2; i < arr.length; i++) {
        if (i == arr.length-1) {
            break;
        }
        var regex = /<tr><td>.*?<\/td><td>(.*?)<\/td><td>.*?<\/td><\/tr>/g;
        var match = regex.exec(arr[i]);
        obj = {prices: Number(match[1]), data: match[0]};
        rows.push(obj);
    }
    rows.sort(function(a,b){
        if (a.prices != b.prices) {
            return a.prices - b.prices
        }else{
            return a.data.localeCompare(b.data);
        }
    });
    console.log(arr[0]);
    console.log(arr[1]);
    for (var i in rows) {
        console.log(rows[i].data);
    }
    console.log(arr[arr.length-1]);
}
solve(['<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>'
]);
