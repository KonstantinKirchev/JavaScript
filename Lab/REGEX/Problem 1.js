function solve(input) {

    var result = input.match(/([\w+\-\.])+@(.*?)\.\w{2,}/gi);
    console.log(JSON.stringify(result));

}
solve("meil SLO4AENOS.NeMisLA@Eliomenad.com mail");
