/**
 * Created by Konstantin on 12.3.2015 г..
 */
function setTimer(){
    var time, hour, minutes, seconds;
    time = new Date();
    hour = setZero(time.getHours());
    minutes = setZero(time.getMinutes());
    seconds = setZero(time.getSeconds());
    document.getElementById('time').innerHTML = hour + ':' + minutes + ':' + seconds;
}

function setZero(num){
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

setInterval(function() {setTimer()}, 1000);