function solve(arr){
    var output = '<table border="1">\n' + '<thead>\n' + '<tr><th colspan="3">Blades</th></tr>\n' + '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n' + '</thead>\n' + '<tbody>\n';
    var num = 0;
    var typeOfBlade = '';
    var application = '';
    for (var i in arr) {
        num = parseInt(arr[i]);
        if (num > 10) {
            if (num > 40) {
                typeOfBlade = 'sword';
            }else {
                typeOfBlade = 'dagger';
            }
            for (var j = 0; j <= num; j++) {
                if (num % (j*5+1) == 0) {
                    application = 'blade';
                }else if (num % (j*5+2) == 0) {
                    application = 'quite a blade';
                }else if (num % (j*5+3) == 0) {
                    application = 'pants-scraper';
                }else if (num % (j*5+4) == 0) {
                    application = 'frog-butcher';
                }else if (num % (j*5+5) == 0) {
                    application = '*rap-poker';
                }
            }
            output += '<tr><td>' + num + '</td><td>' + typeOfBlade + '</td><td>' + application + '</td></tr>\n';
        }
    }
    output += '</tbody>\n' + '</table>';
    console.log(output);
}
//function solve(array){
//    var output = '<table border="1">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n';
//    for (var i in array) {
//        var num = Number(array[i]);
//        num = Math.floor(num);
//        if (num > 10) {
//            var type = '';
//            if (num > 40) {
//                type = 'sword';
//            }else{
//                type = 'dagger';
//            }
//            var n = num;
//            for (var j = 0; j < n; j++) {
//                switch (num) {
//                    case ((j * 5) + 1):
//                        output += '<tr><td>'+num+'</td><td>'+type+'</td><td>blade</td></tr>\n';
//                        break;
//                    case ((j * 5) + 2):
//                        output += '<tr><td>'+num+'</td><td>'+type+'</td><td>quite a blade</td></tr>\n';
//                        break;
//                    case ((j * 5) + 3):
//                        output += '<tr><td>'+num+'</td><td>'+type+'</td><td>pants-scraper</td></tr>\n';
//                        break;
//                    case ((j * 5) + 4):
//                        output += '<tr><td>'+num+'</td><td>'+type+'</td><td>frog-butcher</td></tr>\n';
//                        break;
//                    case ((j * 5) + 5):
//                        output += '<tr><td>'+num+'</td><td>'+type+'</td><td>*rap-poker</td></tr>\n';
//                        break;
//                }
//            }
//        }
//    }
//    output += '</tbody>\n</table>';
//    console.log(output);
//}
solve(['17.8', '19.4', '13', '55.8', '126.96541651', '3']);
