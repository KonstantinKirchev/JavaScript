var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];

function findYoungestPerson(array) {
    var filterArr=[];
    var minAge = Number.MAX_VALUE;
    var currentAge;
    var fullName = '';
    for (var i in array) {
        if (array[i].hasSmartphone == true) {
            filterArr.push(array[i]);
        }
    }
    for (var i in filterArr) {
        currentAge = filterArr[i].age;
        if (currentAge < minAge) {
            minAge = currentAge;
            fullName = filterArr[i].firstname + ' ' + filterArr[i].lastname;
        }
    }
    console.log('The youngest person is', fullName);
}
findYoungestPerson(people);
