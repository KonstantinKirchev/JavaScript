function printNumbers(number) {
    var str = '';
    if (number < 1) {
        console.log('no');
    }
    for (var i = 1; i<= number; i+=1) {
        if (i % 4 == 0 || i % 5 == 0) {
            continue;
        }else {
            str += i + ' ';
        }
    }
    console.log(str);
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);