function solve(arr){
    var bill = arr[0];
    var mood = arr[1];
    var tip = 0;

    switch (mood){
        case 'happy':
            tip = bill * (10/100);
            break;
        case 'married':
            tip = bill * (0.05/100);
            break;
        case 'drunk':
            tip = bill * (15/100);
            var n = Number(tip.toString()[0]);
            tip = Math.pow(tip,n);
            break;
        default:
            tip = bill * (5/100);
            break;
    }
    console.log(tip.toFixed(2));
}
solve(['120.44', 'happy']);
solve(['1230.83', 'drunk']);
solve(['716.00', 'bored']);
