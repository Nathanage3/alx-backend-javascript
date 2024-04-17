// Define the Teacher type
type Teacher = {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; //Add the possibility to add any attribute
};

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}
// Initialize a Directors object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Initialize a Teacher object
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

function printTeacherFunction(firstName: String, lastName: String) {
  return firstName[0] + ". " + lastName;
}

console.log(printTeacherFunction("John", "Doe"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}

// Create an instance of StudentClass
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());
