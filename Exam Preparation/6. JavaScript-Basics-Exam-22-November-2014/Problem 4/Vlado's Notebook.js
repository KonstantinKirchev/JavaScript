function solve(arr){
    var obj = {};
    var line = [];
    for (var i in arr) {
        line = arr[i].split('|');
        var color = line[0];
        var prop = line[1];
        var player = line[2];

        if (!obj[color]) {
            obj[color] = {
                age: 0,
                name: 0,
                opponents: [],
                win: 0,
                loss: 0,
                rank: 0
            }
        }

        switch (prop){
            case 'age':
                obj[color].age = player;
                break;
            case 'name':
                obj[color].name = player;
                break;
            case 'win':
                obj[color].win++;
                obj[color].opponents.push(player);
                break;
            case 'loss':
                obj[color].loss++;
                obj[color].opponents.push(player);
                break;
        }
    }

    for (var i in obj) {
        obj[i].rank = ((obj[i].win + 1) / (obj[i].loss + 1)).toFixed(2);
        delete obj[i].win;
        delete obj[i].loss;
        obj[i].opponents.sort();
        if (!obj[i].name || !obj[i].age) {
            delete obj[i];
        }
    }
    obj = sorted(obj);
    console.log(JSON.stringify(obj));

    function sorted(obj){
        var sortedKey = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i in sortedKey) {
            var key = sortedKey[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}
//function solve(arr){
//    var obj = {};
//    for (var i in arr) {
//        var line = arr[i].trim().split('|');
//        var color = line[0];
//        var prop = line[1];
//        var player = line[2];
//        var rank = 0;
//            if (!obj[color]) {
//            obj[color]={
//                opponents: [],
//                win: 0,
//                loss: 0
//            }
//        }
//        switch (prop) {
//            case 'age':
//            case 'name':
//                obj[color][prop] = player;
//                break;
//            case 'win':
//                obj[color].win += 1;
//                obj[color].opponents.push(player);
//                break;
//            case 'loss':
//                obj[color].loss += 1;
//                obj[color].opponents.push(player);
//                break;
//        }
//
//    }
//    var sortedKeys = Object.keys(obj).sort();
//    var sortObj = {};
//
//    for (var i in sortedKeys) {
//        var key = sortedKeys[i];
//        if (!obj[key].name || !obj[key].age) {
//            continue;
//        }
//        rank = ((obj[key].win + 1) / (obj[key].loss + 1)).toFixed(2);
//
//        sortObj[key] = {
//            age: obj[key].age,
//            name: obj[key].name,
//            opponents: obj[key].opponents.sort(),
//            rank: rank
//        }
//    }
//
//    console.log(JSON.stringify(sortObj));
//}
solve([ 'purple|age|99',
        'red|age|44',
        'blue|win|pesho',
        'blue|win|mariya',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Kiko',
        'purple|loss|Yana',
        'purple|loss|Yana',
        'purple|loss|Manov',
        'purple|loss|Manov',
        'red|name|gosho',
        'blue|win|Vladko',
        'purple|loss|Yana',
        'purple|name|VladoKaramfilov',
        'blue|age|21',
        'blue|loss|Pesho'
]);