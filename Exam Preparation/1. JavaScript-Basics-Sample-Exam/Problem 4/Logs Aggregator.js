function solve(arr){
    var obj = {};
    arr.shift();
    for (var i in arr) {
        var line = arr[i].split(' ');
        var ipAddress = line[0];
        var user = line[1];
        var duration = Number(line[2]);

        if (!obj[user]) {
            obj[user] = {
                duration: duration,
                ip: []
            };
        }else {
            obj[user].duration += duration;
        }
        if (obj[user].ip.indexOf(ipAddress) == -1) {
            obj[user].ip.push(ipAddress);
        }
    }
    obj = sort(obj);
    var key = Object.keys(obj);
    for (i in key) {
        console.log(key[i]+':'+' '+obj[key[i]].duration + ' [' +obj[key[i]].ip.sort().join(', ') +']');
    }


    function sort(obj){
        var sortedKey = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i in sortedKey) {
            var key = sortedKey[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }

}
solve([ '7',
        '192.168.0.11 peter 33',
        '10.10.17.33 alex 12',
        '10.10.17.35 peter 30',
        '10.10.17.34 peter 120',
        '10.10.17.34 peter 120',
        '212.50.118.81 alex 46',
        '212.50.118.81 alex 4'
]);
