function solve(input) {

    var sortCriteria = input[0].split('^'),
        students = [],
        trainers = [],
        sum = 0;

    input.shift();

    input.forEach(function (line) {
        line = JSON.parse(line);


        if (line.role == 'student') {
            sum = 0;
            line.grades.forEach(function (elem) {
                sum += parseFloat(elem);
            });

            students.push({
                id: line.id,
                firstname: line.firstname,
                lastname: line.lastname,
                level: line.level,
                averageGrade: (sum / line.grades.length).toFixed(2),
                certificate: line.certificate
            })
        }

        if (line.role == 'trainer') {
            trainers.push({
                id: line.id,
                firstname: line.firstname,
                lastname: line.lastname,
                courses: line.courses,
                lecturesPerDay: line.lecturesPerDay
            });
        }
    });


    if (sortCriteria[0] == 'name') {
        students.sort(function (a, b) {
            //console.log(a.firstname + ' ' + b.firstname + ' ' + a.lastname + ' ' + b.lastname)
            return (a.firstname != b.firstname ? a.firstname.localeCompare(b.firstname) : a.lastname.localeCompare(b.lastname));
        });
    }
    if (sortCriteria[0] == 'level') {
        students.sort(function (a, b) {
            return (a.level != b.level) ? parseInt(a.level) - parseInt(b.level) : parseInt(a.id) - parseInt(b.id);
        })
    }

    if (sortCriteria[1] == 'courses') {
        trainers.sort(function (a, b) {
            return a.courses.length != b.courses.length ? a.courses.length - b.courses.length : parseInt(a.lecturesPerDay) - parseInt(b.lecturesPerDay);
        })
    }

    students.map(function (elem) {
        delete elem.level;
    });

    var result = {
        students: students,
        trainers: trainers
    };
    console.log(JSON.stringify(result));

}
//function solve(args) {
//    var sortingOrders = args[0].split("^");
//    var people = [];
//    for (var i = 1; i < args.length; i += 1) {
//        people.push(JSON.parse(args[i]));
//    }
//
//    var sortedStudents = people
//        .filter(function (person) {
//            return person.role == "student";
//        })
//        .sort(function (a, b) {
//            if (sortingOrders[0] == "name") {
//                if (a.firstname != b.firstname) {
//                    return a.firstname < b.firstname ? -1 : 1;
//                }
//                else if (a.lastname != b.lastname) {
//                    return a.lastname < b.lastname ? -1 : 1;
//                }
//            }
//            else {
//                if (a.level != b.level) {
//                    return a.level < b.level ? -1 : 1;
//                }
//                else {
//                    return a.id < b.id ? -1 : 1;
//                }
//            }
//        })
//        .map(function (person) {
//            var avgGrade = 0;
//            for (var i = 0; i < person.grades.length; i += 1) {
//                avgGrade += Number(person.grades[i]);
//            }
//
//            avgGrade /= person.grades.length;
//            return {
//                id: person.id,
//                firstname: person.firstname,
//                lastname: person.lastname,
//                averageGrade: avgGrade.toFixed(2),
//                certificate: person.certificate
//            };
//        });
//
//    var sortedTrainers = people
//        .filter(function (person) {
//            return person.role == "trainer";
//        })
//        .sort(function (a, b) {
//            if (a.courses.length != b.courses.length) {
//                return a.courses.length - b.courses.length;
//            }
//            else {
//                return a.lecturesPerDay - b.lecturesPerDay;
//            }
//        })
//        .map(function (person) {
//            return {
//                id: person.id,
//                firstname: person.firstname,
//                lastname: person.lastname,
//                courses: person.courses,
//                lecturesPerDay: person.lecturesPerDay
//            };
//        });
//    var result = {
//        students: sortedStudents,
//        trainers: sortedTrainers
//    };
//
//    console.log(JSON.stringify(result));
//}
solve(['level^courses',
    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}'
]);
