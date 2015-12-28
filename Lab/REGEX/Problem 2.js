function solve(input) {

    var result = input.match(/(href="(.*?)")/gi);
    console.log(JSON.stringify(result));

}
solve('<a href="google.com"></a>');
