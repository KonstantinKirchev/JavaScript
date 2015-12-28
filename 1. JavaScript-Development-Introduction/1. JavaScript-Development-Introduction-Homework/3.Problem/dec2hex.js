/**
 * Created by Konstantin on 12.3.2015 г..
 */
function decim2hex (){
    var number,
        hexNum;

        number = parseInt(prompt());
        hexNum = number.toString(16).toUpperCase();
    alert(hexNum);
}
decim2hex();
