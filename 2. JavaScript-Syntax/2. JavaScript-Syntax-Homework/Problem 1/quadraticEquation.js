function quadEquation(a, b, c){
    var delta, x1, x2;

    delta = (Math.pow(b,2)) - (4 * a * c);

    if (delta > 0) {
        x1 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log('X1 = ' + x1);
        console.log('X2 = ' + x2);
    }else if (delta == 0) {
        x1 = x2 = -b / (2 * a);
        console.log('X = ' + x1);
    }else{
        console.log('No real roots');
    }
}

quadEquation(2, 5, -3);
quadEquation(2, -4, 2);
quadEquation(4, 2, 1);
