function solve(arr){
    arr = arr.filter(function(x){
       return x>=0 && x<=400;
    });
    arr = arr.map(function(x){
       return x * 0.8;
    });
    arr = arr.sort(function(a,b){
       return a-b;
    });
    for (var index in arr) {
        arr[index] = Math.round(arr[index] * 10) / 10;
    }
    console.log(arr);
}
solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);