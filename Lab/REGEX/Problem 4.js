function solve(input) {

    var result = input.match(/((\d{1,2})([\/\.\-])(\d{1,2})([\/\.\-])(\d{4}))+/gi);
    console.log(JSON.stringify(result));

}
solve('blabla03/24/2015vla');
