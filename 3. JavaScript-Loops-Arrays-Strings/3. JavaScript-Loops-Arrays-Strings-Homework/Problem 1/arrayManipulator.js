function solve(arr){
    var min, max, mostFreq;
    Array.prototype.occurs = function(arg){
        var counter = 0;
        for(var i = 0; i< this.length; i++){
            if(this[i] === arg)
                counter++;
        }
        return counter;
    };
    arr = arr.filter(function(x){
        return !isNaN(x);
    });
    arr = arr.sort(function(a,b){
       return a-b;
    });
    min = arr[0];
    max = arr[arr.length-1];
    var maxFrequent = 0;
    var mostFreqNumber = 0;
    for (var i = 0; i < arr.length; i++) {
        var frequency = arr.occurs(arr[i]);
        if (frequency > maxFrequent) {
            maxFrequent = frequency;
            mostFreqNumber = arr[i];
        }
    }

    console.log('Min number: ' + min);
    console.log('Max number: ' + max);
    console.log('Most frequent number: ' + mostFreqNumber);
    console.log(arr.reverse());

}
solve(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);