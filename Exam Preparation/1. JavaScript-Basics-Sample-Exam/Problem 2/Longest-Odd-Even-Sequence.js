function solve(input){
    var text = input[0];
    var output = [];
    output = text.split(/[() ]+/g).filter(Boolean);
    var counter = 1;
    var maxCount = 1;
    for (var i = 0; i < output.length-1; i++) {
        if (output[i]%2 == 0 && output[i+1] == 0) {
            output[i+1] = 1;
        }else if (output[i]%2 != 0 && output[i+1]==0) {
            output[i+1] = 2;
        }else if (output[i] == 0 && output[i+1] == 0) {
            output[i] = 1;
            output[i+1] = 2;
        }
        if ((output[i]%2 == 0 && output[i+1]%2 != 0)
        || (output[i]%2 != 0 && output[i+1]%2 == 0) ) {
            counter++;
            if (counter>maxCount) {
                maxCount=counter;
            }
        }else {
            counter=1;
        }
    }
    console.log(maxCount);
}
