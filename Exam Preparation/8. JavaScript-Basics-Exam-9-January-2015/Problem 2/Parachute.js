function solve(arr){
    var posX = 0;
    var posY = 0;
    for (var row = 0; row < arr.length; row++) {
        for (var col = 0; col < arr[row].length; col++) {
            if (arr[row][col]=='o') {
                posX = row;
                posY = col;
                break;
            }
        }
    }
    for (var i = posX+1; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j]=='>') {
                posY++;
            }else if (arr[i][j]=='<') {
                posY--;
            }
        }
        if (arr[i][posY]=='\\' || arr[i][posY]=='/' || arr[i][posY]=='|') {
            console.log("Got smacked on the rock like a dog!");
            console.log(i + ' ' + posY);
            break;

        }else if (arr[i][posY]=='~') {
            console.log("Drowned in the water like a cat!");
            console.log(i + ' ' + posY);
            break;
        }
        else if (arr[i][posY]=='_') {
            console.log("Landed on the ground like a boss!");
            console.log(i + ' ' + posY);
            break;
        }
    }
}
solve([ "-------------o-<<--------",
        "-------->>>>>------------",
        "---------------->-<---<--",
        "------<<<<<-------/\\--<--",
        "--------------<--/-<\\----",
        ">>--------/\\----/<-<-\\---",
        "---------/<-\\--/------\\--",
        "<-------/----\\/--------\\-",
        "\\------/--------------<-\\",
        "-\\___~/------<-----------"
]);

solve([ '--------\\---/------<-----',
        '-->------|o|-------------',
        '----->---|-|-------<-----',
        '---------|>|<------------',
        '->-------/--\\<--->-------',
        '<---<---/----\\---->----><',
        '->>>>--/-<--</----<---<-<',
        '-------\\>>><<\\-----------',
        '>-------\\----/-->--------',
        '---------\\__/------------'
]);