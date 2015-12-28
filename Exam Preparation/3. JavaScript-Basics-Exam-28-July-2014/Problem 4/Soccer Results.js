function solve(arr) {
    var obj = {},
        line = [];

    for (var i in arr) {
        line = arr[i].split(/[\/:\-]/g);
        var homeTeam = line[0].trim();
        var awayTeam = line[1].trim();
        var scoreHomeTeam = Number(line[2].trim());
        var scoreAwayTeam = Number(line[3].trim());
        processObject(obj, homeTeam, awayTeam, scoreHomeTeam, scoreAwayTeam);
        processObject(obj, awayTeam, homeTeam, scoreAwayTeam, scoreHomeTeam);
    }

    obj = sortObject(obj);
    for (var team in obj) {
        obj[team].matchesPlayedWith.sort();
    }

    console.log(JSON.stringify(obj));

    function processObject(obj, homeTeam, awayTeam, scoreHomeTeam, scoreAwayTeam){
        if (!obj[homeTeam]) {
            obj[homeTeam] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            }
        }
        obj[homeTeam].goalsScored += scoreHomeTeam;
        obj[homeTeam].goalsConceded += scoreAwayTeam;
        if (obj[homeTeam].matchesPlayedWith.indexOf(awayTeam) == -1) {
            obj[homeTeam].matchesPlayedWith.push(awayTeam);
        }
    }
    function sortObject(obj){
        var keysSorted = Object.keys(obj).sort();
        var sortedObj = {};
        for (var i in keysSorted) {
            var key = keysSorted[i];
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
}
solve(['Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'
]);

//if (!obj[homeTeam]) {
//    sumScored +=scoreHomeTeam;
//    sumConceded +=scoreAwayTeam;
//    obj[homeTeam] = {
//        goalScored: sumScored,
//        goalConceded: sumConceded,
//        matchesPlayedWith: []
//    };
//}
//if (!obj[awayTeam]) {
//    sumScored +=scoreHomeTeam;
//    sumConceded +=scoreAwayTeam;
//    obj[awayTeam] = {
//        goalScored: sumScored,
//        goalConceded: sumConceded,
//        matchesPlayedWith: []
//    };
//}
//obj[homeTeam].matchesPlayedWith.push(awayTeam);
//obj[awayTeam].matchesPlayedWith.push(homeTeam);
