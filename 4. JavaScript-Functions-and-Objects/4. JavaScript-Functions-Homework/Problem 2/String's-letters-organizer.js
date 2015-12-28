function sortLetters(string, boolean) {
    var input = string.split('');
    if (boolean) {
        input.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    }else {
        input.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }).reverse();
    }
    console.log(input.join(''));
}
sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);
