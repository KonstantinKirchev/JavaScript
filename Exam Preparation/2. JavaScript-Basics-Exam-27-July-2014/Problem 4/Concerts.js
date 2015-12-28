function solve(arr){
    var obj = {};
    for (var i in arr) {
        var line = arr[i].split(' | ');
        var band = line[0];
        var city = line[1];
        var stadium = line[3];

        if (!obj[city]) {
            obj[city] = {};
        }
        if (!obj[city][stadium]) {
            obj[city][stadium] = [];
        }
        if (obj[city][stadium].indexOf(band) == -1) {
            obj[city][stadium].push(band);
        }
    }
    obj = sorted(obj);

    for (i in obj) {
        obj[i] = sorted(obj[i]);
        for (var j in obj[i]) {
            obj[i][j].sort();
        }
    }

    console.log(JSON.stringify(obj));

    function sorted(obj){
        var sortedObj = {};
        var sortedKeys = Object.keys(obj).sort();
        for (var i in sortedKeys) {
            var key = sortedKeys[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}
//function solve(arr){
//    var obj = {};
//    for (var i in arr) {
//        var line = arr[i].split(' | ');
//        var band = line[0];
//        var town = line[1];
//        var venue = line[3];
//
//        if (!obj[town]) {
//            obj[town] = {};
//        }
//        if (!obj[town][venue]) {
//            obj[town][venue] = [];
//        }
//        if (obj[town][venue].indexOf(band) == -1) {
//            obj[town][venue].push(band);
//        }
//    }
//
//    obj = sortObjectProperties(obj);
//    for (town in obj) {
//        obj[town] = sortObjectProperties(obj[town]);
//        for (venue in obj[town]) {
//            obj[town][venue].sort();
//        }
//    }
//
//    console.log(JSON.stringify(obj));
//
//    function sortObjectProperties(obj) {
//        var keysSorted = Object.keys(obj).sort();
//        var sortedObj = {};
//        for (var i = 0; i < keysSorted.length; i++) {
//            var key = keysSorted[i];
//            sortedObj[key] = obj[key];
//        }
//        return sortedObj;
//    }
//}
solve(['ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
]);