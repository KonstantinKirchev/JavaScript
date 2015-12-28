function solve(arr){
    var start = Number(arr[0]);
    var end = Number(arr[1]);
    var output = '<ul>\n';
    for (var i = start; i <= end; i++) {
        var str = i.toString().split('');
        var isFound = false;
        for (var j = 0; j < str.length-1; j++) {
            for (var k = j+2; k < str.length-1; k++) {
                var firstNum = str[j]+str[j+1];
                var secondNum = str[k]+str[k+1];
                if (firstNum == secondNum) {
                    isFound = true;
                    break;
                }
            }
        }
        if (isFound) {
            output += "<li><span class='rakiya'>"+i+"</span><a href=\"view.php?id="+i+">View</a></li>\n";
        }
        else{
            output += "<li><span class='num'>"+i+"</span></li>\n";
        }
    }
    output += "</ul>";
    console.log(output);
}
solve(['5',
    '8'
]);
solve(['11210',
       '11215'
      ]);
solve(['55555',
       '55560'
]);