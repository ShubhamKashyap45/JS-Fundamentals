const jsUser = {
    name: "Shubham",
    age: 23,
    location: "Pune",
    email: "shubham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["age"]);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Shubham"
}

const {courseInstructor: instructor} = course

console.log(instructor);