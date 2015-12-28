function compareChars(arr1, arr2) {
    var i, str;

    str = '';
    for (i in arr1) {
        if (arr1[i]!== arr2[i]) {
            str = 'Not Equal';
            break;
        }
    }
    if (str == 'Not Equal') {
        console.log('Not Equal')
    }else{
        console.log('Equal')
    }
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
             ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'],
             ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
             ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
