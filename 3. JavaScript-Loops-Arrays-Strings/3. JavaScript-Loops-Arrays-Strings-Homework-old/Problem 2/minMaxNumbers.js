function findMinAndMax(arr) {
    var min, max, index;

    min = Number.MAX_VALUE;
    max = Number.MIN_VALUE;

    for (index in arr) {
        if (arr[index]<min) {
            min = arr[index];
        }
        if (arr[index]>max) {
            max = arr[index];
        }
    }

    console.log('Min -> ' +  min);
    console.log('Max -> ' +  max);

}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);