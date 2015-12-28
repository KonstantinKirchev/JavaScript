function solve(input) {

    var result = input.match(/[\w\-]{3,15}/gi);
    console.log(JSON.stringify(result));

}
solve("user 0n3 %$%^");
