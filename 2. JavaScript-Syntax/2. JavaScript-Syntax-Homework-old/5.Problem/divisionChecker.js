function divisionBy3(number) {
    var sum = 0;
    var count = 1;
    var num = number;
    if (number > 9) {
        while (num != 0) {
            num = (number/count) % 10;
            sum +=Math.floor(num);
            count *=10;
        }
        if (sum % 3 == 0) {
            console.log('the number is divided by 3 without remainder');
        }else{
            console.log('the number is not divided by 3 without remainder');
        }
    }
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);
