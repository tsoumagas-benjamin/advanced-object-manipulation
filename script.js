// Created a student object with a method to retrieve relevant information
const student = {
    name: "Ben",
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
    }
}

// Part 1
console.log(student.name);
console.log(student.age);
console.log(student.getInfo());