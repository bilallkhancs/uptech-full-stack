const users = [
    { name: "Alice", courses: ["Math", "Science", "English"] },
    { name: "Bob", courses: ["Math", "Art"] },
    { name: "Charlie", courses: ["Science", "Math", "History"] },
    { name: "David", courses: ["Math", "English"] },
    { name: "Eve", courses: ["Art", "Science"] }
];
let courseCount = {}
for (let i = 0; i < users.length; i++) {
    let courses = users[i].courses
    for (let j = 0; j < courses.length; j++) {
        let course = courses[j]
        if (courseCount[course]) {
            courseCount[course]++
        } else {
            courseCount[course] = 1
        }
    }
}

// console.log(courseCount);

for (let course in courseCount) {
    console.log(`${course}: ${courseCount[course]} students`);
}

let mostPopularCourse = "";
let maxCount = 0;
for (let course in courseCount) {
    if (courseCount[course] > maxCount) {
        maxCount = courseCount[course]; 
        mostPopularCourse = course;

    }
}
console.log(`Most popular course: ${mostPopularCourse} with ${maxCount} students`);