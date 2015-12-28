function solve(arr){
    for (var i in arr) {

        var regex = /([^&=?]+)=([^&=?]+)/g;
        var match = regex.exec(arr[i]);
        var object = {};
        while (match) {
            var key = match[1].replace(/(%20|\+)+/g,' ').trim();
            var value = match[2].replace(/(%20|\+)+/g,' ').trim();
            if (!object[key]) {
                object[key] = [];
            }
            object[key].push(value);
            match = regex.exec(arr[i]);
        }
        var output = '';
        for (var i in object) {
            output += i +'=['+object[i].join(', ')+']';
        }
        console.log(output);
    }
}
solve(['foo=%20foo&value=+val&foo+=5+%20+203',
'foo=poo%20&value=valley&dog=wow+',
'url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
    ]);
