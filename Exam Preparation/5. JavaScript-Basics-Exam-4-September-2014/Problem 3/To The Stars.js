function solve(arr) {

    var line1 = arr[0].split(/\s+/g);
    var star1 = line1[0].toLowerCase();
    var x1 = Number(line1[1]);
    var y1 = Number(line1[2]);

    var line2 = arr[1].split(/\s+/g);
    var star2 = line2[0].toLowerCase();
    var x2 = Number(line2[1]);
    var y2 = Number(line2[2]);

    var line3 = arr[2].split(/\s+/g);
    var star3 = line3[0].toLowerCase();
    var x3 = Number(line3[1]);
    var y3 = Number(line3[2]);


    var norm = arr[3].split(/\s+/g);
    var normX = Number(norm[0]);
    var normY = Number(norm[1]);

    var n = arr[4];

    for (var j = 0; j <= n; j++) {
        if (normX >= x1-1 && normX <= x1+1 &&
            normY+j >= y1-1 && normY+j <= y1+1) {
            console.log(star1);
        }else if (normX >= x2-1 && normX <= x2+1 &&
            normY+j >= y2-1 && normY+j <= y2+1) {
            console.log(star2);
        }else if (normX >= x3-1 && normX <= x3+1 &&
            normY+j >= y3-1 && normY+j <= y3+1) {
            console.log(star3);
        } else {
            console.log("space");
        }
    }
}
solve(['Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
]);
solve(['Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'
]);