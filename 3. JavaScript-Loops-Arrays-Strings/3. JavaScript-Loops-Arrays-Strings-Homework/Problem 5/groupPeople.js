function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
var Pesho = new Person("Pesho", "Georgiev", 21);
console.log(Pesho.firstName);
console.log(Pesho['firstname']);
