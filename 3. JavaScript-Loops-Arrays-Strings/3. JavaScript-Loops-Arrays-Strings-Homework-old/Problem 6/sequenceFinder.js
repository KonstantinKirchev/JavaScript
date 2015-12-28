function findMaxSequence(arr)  {
    var currentSequence = 1;
    var longestSequence = 1;
    var indexOfLongest, result;

    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] === arr[i+1]) {
            currentSequence++;
        } else {
            if (longestSequence <= currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            }
            currentSequence = 1;
        }
    }
    result = arr.slice(indexOfLongest, indexOfLongest + longestSequence);
    if (arr.length == 1) {
        console.log(arr)
    }else{
        console.log(result);
    }
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);