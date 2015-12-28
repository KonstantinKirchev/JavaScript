function solve(arr){
    var obj = {}, line = [];
    for (var i in arr) {
        line = arr[i].split("|");
        var name = line[0].trim();
        var course = line[1].trim();
        var grade = Number(line[2].trim());
        var visits = Number(line[3].trim());

        if (!obj[course]) {

            obj[course] = {
                avgGrade: 0,
                avgVisits: 0,
                students: [],
                counter: 0
            }
        }
        obj[course].avgGrade += grade;
        obj[course].avgVisits += visits;
        obj[course].counter++;

        if (obj[course].students.indexOf(name) == -1) {
            obj[course].students.push(name);
        }
    }
    for (var i in obj) {
        obj[i].avgGrade = Number((obj[i].avgGrade / obj[i].counter).toFixed(2));
        obj[i].avgVisits = Number((obj[i].avgVisits / obj[i].counter).toFixed(2));
        delete obj[i].counter;
    }
    obj = propSort(obj);
    for (var i in obj) {
        obj[i].students.sort();
    }

    console.log(JSON.stringify(obj));

    function propSort(obj){
        var sortedObj = {};
        var sortedKeys = Object.keys(obj).sort();
        for (var i in sortedKeys) {
            var key = sortedKeys[i];
            sortedObj[key]= obj[key];
        }
        return sortedObj;
    }
}

//function solve(arr){
//    var obj = {};
//    for (var i in arr) {
//        var line = arr[i].split('|');
//        var student = line[0].trim();
//        var course  = line[1].trim();
//        var grade = Number(line[2].trim());
//        var visits = Number(line[3].trim());
//
//        if (!obj[course]) {
//            obj[course] = {
//                grade: [],
//                visits: [],
//                students: []
//            };
//        }
//        if (obj[course].students.indexOf(student) == -1) {
//            obj[course].students.push(student);
//        }
//        obj[course].grade.push(grade);
//        obj[course].visits.push(visits);
//
//    }
//    var output = {};
//    var courses = Object.keys(obj).sort();
//    for (var i in courses) {
//        var courseName = courses[i];
//        var courseInfo = {
//            avgGrade: average(obj[courseName].grade),
//            avgVisits: average(obj[courseName].visits),
//            students: obj[courseName].students.sort()
//        };
//        output[courseName] = courseInfo;
//    }
//
//    console.log(JSON.stringify(output));
//
//    function average(arr) {
//        var sum = 0;
//        for (var i in arr) {
//            sum += arr[i];
//        }
//        var avg = sum / arr.length;
//        avg = Number(avg.toFixed(2));
//        return avg;
//    }
//}
solve(['Peter Nikolov | PHP  | 5.50 | 8',
       'Maria Ivanova | Java | 5.83 | 7',
       'Ivan Petrov   | PHP  | 3.00 | 2',
       'Ivan Petrov   | C#   | 3.00 | 2',
       'Peter Nikolov | C#   | 5.50 | 8',
       'Maria Ivanova | C#   | 5.83 | 7',
       'Ivan Petrov   | C#   | 4.12 | 5',
       'Ivan Petrov   | PHP  | 3.10 | 2',
       'Peter Nikolov | Java | 6.00 | 9'
]);
