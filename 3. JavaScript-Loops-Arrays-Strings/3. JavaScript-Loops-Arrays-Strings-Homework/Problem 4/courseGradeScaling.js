function solve(arr){
    for (var i in arr) {
        arr[i].score *= 1.1;
        arr[i].score = Math.round(arr[i].score *10) / 10;
        if (arr[i].score >= 100) {
            arr[i].hasPassed = true;
        }else{
            arr[i].hasPassed = false;
        }
    }
    arr = arr.filter(function(x){
        return x.hasPassed === true;
    });
    arr.sort(function(a,b){
       return a.name > b.name;
    });
    arr = JSON.stringify(arr);
    console.log(arr);
}
solve([
        {
            'name' : 'Пешо',
            'score' : 91
        },
        {
            'name' : 'Лилия',
            'score' : 290
        },
        {
            'name' : 'Алекс',
            'score' : 343
        },
        {
            'name' : 'Габриела',
            'score' : 400
        },
        {
            'name' : 'Жичка',
            'score' : 70
        }
    ]
);
