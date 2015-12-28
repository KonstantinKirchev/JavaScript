function extractObjects(array){
    var output = [];
    for (var index in array) {
        if (typeof array[index] == "string"
            || typeof array[index] == "number"
            || typeof array[index][0] == "number") {
            continue;
        }else {
            output.push(array[index]);
        }
    }
    console.log(output);
}
extractObjects([
        "Pesho",
        4,
        4.21,
        { name : 'Valyo', age : 16 },
        { type : 'fish', model : 'zlatna ribka' },
        [1,2,3],
        "Gosho",
        { name : 'Penka', height: 1.65}
    ]
);
