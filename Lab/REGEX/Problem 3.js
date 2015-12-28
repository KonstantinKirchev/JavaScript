function solve(input) {

    var result = input.match(/(\b[A-Z][a-z]+\s??){3}/gi);
    console.log(JSON.stringify(result));

}
solve('Pesho Peshev Peshev');
