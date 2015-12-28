function solve(input){
    var regex = /<p>(.*?)<\/p>/g;
    var match = regex.exec(input);
    var output = '';
    while (match) {
        var process = match[1].replace(/[^a-z0-9]+/g,' ');
        output += process;
        match = regex.exec(input);
    }
    var char = '';
    for (var i = 0; i < output.length; i++) {
        if (output[i]>='a' && output[i]<='m') {
            var num = output[i].charCodeAt(0) + 13;
            char += String.fromCharCode(num);
        }else if (output[i]>='n' && output[i]<='z') {
            num = output[i].charCodeAt(0) - 13;
            char += String.fromCharCode(num);
        }else if (output[i]==' ') {
            char += ' ';
        }else if(output[i]>='0' && output[i]<='9'){
            char += output[i];
        }
    }
    char = char.replace(/\s+/g,' ');
    console.log(char.trim());
}
solve(['<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>']);
solve(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']);
solve(['<html><head><title></title></head><body><p>Intro</p><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><p>it is frustrating that you have not put car chains yet... embarrassing...</p><p>orsber lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p><span>it is not that fun making tests sometimes, onlysometimes :)</span></body>']);