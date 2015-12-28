function solve(input){
    var text = input[0];
    var output = [];
    var splitString = text.split(/[\W\d]+/g);
    var isTrue = false;
    if (splitString.length > 2) {
        for (var a = 0; a < splitString.length; a++) {
            for (var b = 0; b < splitString.length; b++) {
                for (var c = 0; c < splitString.length; c++) {
                    if (a!==b && splitString[a] + splitString[b] === splitString[c]
                        && splitString[a] !== '' && splitString[b] !== '') {
                        var cognateWords = splitString[a] + '|' + splitString[b] + '=' + splitString[c];
                        if (output.indexOf(cognateWords) < 0) {
                            output.push(cognateWords);
                        }
                        isTrue = true;
                    }
                }
            }
        }
    }
    if (!isTrue) {
        console.log('No');
    }else{
        console.log(output.join('\n'));
    }
}
solve('java..?|basics/*-+=javabasics');
solve('Hi, Hi, Hihi');
solve('Uni(lo,.ve=I love SoftUni (Soft)');
solve('a a aa a');
solve('x a ab b aba a hello+java a b aaaaa');
solve('aa bb bbaa');
solve('ho hoho');

