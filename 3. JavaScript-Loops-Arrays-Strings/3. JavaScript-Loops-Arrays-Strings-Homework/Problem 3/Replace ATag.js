function solve(input){
    var match;
    var regex = /<a(.*?)>(.*?)<\/a>/g;
    while(match = regex.exec(input)){
        var initial = match[0];
        var replacementString = '[URL' + match[1] + ']' + match[2] + '[/URL]';
        input = input.replace(initial, replacementString);
    }
    console.log(input);
}
solve('<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>');