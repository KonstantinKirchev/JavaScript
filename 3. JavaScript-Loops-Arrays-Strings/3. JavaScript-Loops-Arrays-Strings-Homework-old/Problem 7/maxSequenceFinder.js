function findMaxSequence(arr) {
    var currentSequence = 1;
    var longestSequence = 1;
    var indexOfLongest, result;
    var noSeq = 0;
    for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] < arr[i+1]) {
            currentSequence++;
            noSeq++;
        } else {
            if (longestSequence <= currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            }
            currentSequence = 1;
        }
    }
    result = arr.slice(indexOfLongest, indexOfLongest + longestSequence);
    if (noSeq == 0) {
        console.log('no');
    }else{
        console.log(result);
    }
}
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);