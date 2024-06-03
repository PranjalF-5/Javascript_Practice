const User = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bruce",
            lastname: "Wayne"
        }
    }
};

console.log(User.fullname.userfullname.firstname); 


// Merging the objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3); // {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}



// const tinderUser = {};
// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;
// console.log(Object.keys(tinderUser)); // ["id", "name", "isLoggedIn"]
// console.log(Object.values(tinderUser)); // ["123abc", "Sammy", false]
// console.log(Object.entries(tinderUser)); // [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


//object Destructuring

const course = {
    coursename: "I am Batman",
    price: "999",
    courseInstructor: "DC"
};

const {courseInstructor: instructor} = course;
console.log(instructor); // "DC"


