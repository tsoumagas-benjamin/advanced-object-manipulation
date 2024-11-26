// Created a student object with a method to retrieve relevant information
const student = {
    studentName: "Ben",
    age: 23,
    enrolled: true,
    courses: ["Algorithms", "Databases", "JavaScript", "Operating Systems", "Technical Writing", "Web Programming"],
    getInfo() {
        //Display student info depending on enrolment status
        let enrolment = "";
        if (this.enrolled === true) {
            enrolment = "Enrolled";
        } else {
            enrolment = "Not enrolled"
        }
        return `Name: ${this.name}\nAge: ${this.age}\nEnrolment Status: ${enrolment}\nCourses: ${enrolment ? this.courses : "N/A"}`
    },
    // Add method to dynamically add a new course to the courses array
    addCourse(course) {
        this.courses = [...this.courses, course];
    },
    totalCourses() {
        return this.courses.length;
    }
}

// Part 1
console.log(student.studentName);
console.log(student.age);
console.log(student.getInfo());

// Part 2
// Turn the student object to JSON and log it to the console
let studentJSON = JSON.stringify(student);
console.log(studentJSON);
// Turn the JSON back to an object and log it to the console
let studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// Part 3
// Destructure the object to get name and courses
const { studentName, age, enrolled, courses} = student;
console.log(studentName);
console.log(courses);
// Create an array of scores 
const scores = [83, 45, 28, 91, 82];
const [first, second] = scores;
console.log(first);
console.log(second);

// Part 4
// Use the spread operator to clone the student object and add a new property
let studentClone = {...student, graduationYear: 2027};
console.log(studentClone);
// Combine student courses with a new array of courses with the spread operator
let newCourses = ["Math", "Science", "History", "Art"];
let combinedCourses = [...student.courses, ...newCourses];
console.log(combinedCourses);

// Part 5
// Call addCourse() from student object to dynamically add a course
student.addCourse("Programming Languages");
console.log(student.courses);
// Call totalCourses() from student object to get the total amount of courses
console.log(student.totalCourses());

//Bonus: Get average of scores array using reduce
const initialValue = 0;
const average = scores.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,
) / scores.length;
console.log(average);