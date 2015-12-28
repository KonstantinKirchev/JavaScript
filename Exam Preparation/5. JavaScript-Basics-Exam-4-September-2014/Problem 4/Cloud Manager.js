function solve(arr){
    var obj = {},
        line = [];
    for (var i in arr) {
        line = arr[i].split(' ');
        var name = line[0];
        var extension = line[1];
        var memory = Number(line[2].replace('MB', ''));

        if (!obj[extension]) {
            obj[extension] = {
                files: [],
                memory: 0
            }
        }
        obj[extension].files.push(name);
        obj[extension].memory += memory;
    }
    for (var i in obj) {
        obj[i].memory = obj[i].memory.toFixed(2);
        obj[i].files.sort();
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
//function solve(arr) {
//    var obj = {},
//        line = [];
//    for (var i in arr) {
//        line = arr[i].split(/\s+/g);
//        var name = line[0].trim();
//        var extension = line[1].trim();
//        var memory = Number(line[2].trim().replace('MB', ''));
//
//        if (!obj[extension]) {
//            obj[extension] = {
//                files: [],
//                memory: 0
//            }
//        }
//        if (obj[extension].files.indexOf(name) == -1) {
//            obj[extension].files.push(name);
//        }
//        obj[extension].memory += memory;
//    }
//    obj = propSort(obj);
//    for (var i in obj) {
//        obj[i].memory = obj[i].memory.toFixed(2);
//        obj[i].files.sort();
//    }
//    console.log(JSON.stringify(obj));
//
//    function propSort(obj) {
//        var sortedKeys = Object.keys(obj).sort();
//        var sortedObj = {};
//        for (var i in sortedKeys) {
//            var key = sortedKeys[i];
//            sortedObj[key] = obj[key];
//        }
//        return sortedObj;
//    }
//}
solve(['sentinel .exe 15MB',
       'zoomIt .msi 3MB',
       'skype .exe 45MB',
       'trojanStopper .bat 23MB',
       'kindleInstaller .exe 120MB',
       'setup .msi 33.4MB',
       'winBlock .bat 1MB'
]);
