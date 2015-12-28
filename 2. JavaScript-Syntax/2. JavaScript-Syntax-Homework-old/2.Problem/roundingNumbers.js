function roundingNumbers(number){
    var mathRound, mathFloor;

    mathRound = Math.round(number);
    mathFloor = Math.floor(number);

    console.log('mathFloor= ' + mathFloor + '\n' + 'mathRound= ' + mathRound + '\n');
}

roundingNumbers(22.7);
roundingNumbers(12.3);
roundingNumbers(58.7);