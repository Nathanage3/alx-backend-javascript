// Initialize a Directors object
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Initialize a Teacher object
var teacher3 = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};
console.log(teacher3);
function printTeacherFunction(firstName, lastName) {
    return firstName[0] + ". " + lastName;
}
console.log(printTeacherFunction("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Create an instance of StudentClass
var student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
