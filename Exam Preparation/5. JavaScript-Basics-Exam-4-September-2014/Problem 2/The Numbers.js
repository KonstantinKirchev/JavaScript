function solve(input){
    var output = '';
    var number = input[0].split(/\D+/g);
    for (var i in number) {
        if (number[i]) {
            var hexString = Number(number[i]).toString(16).toUpperCase();

            if (hexString.length==1) {
                hexString = '0x000'+hexString;
            }else if (hexString.length==2) {
                hexString = '0x00'+hexString;
            }else if (hexString.length==3) {
                hexString = '0x0'+hexString;
            }else{
                hexString = '0x'+hexString;
            }
            if (i==0) {
                output = hexString;
            }else{
                output += '-' + hexString;
            }
        }
    }
    console.log(output);
}
solve(['482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312']);
solve(['20']);
solve(['5tffwj(//*7837xzc2---34rlxXP%$".']);