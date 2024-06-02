// objects can be declared by using object literals and by using constructors

const user = {
    name : "Batman",
    age : 22 ,
    home : "Gotham",
    id: "Bruce",

    //cant access by dot operator
    "full name" : "Bruce Wayne"
}

// console.log(user.name);
// console.log(user.age);
// console.log(user.home);
// console.log(user.id);
// console.log(user['full name']);   // can only be accessed by this method


// //change the date properties values


// user.name = "Superman"
// console.log(user.name);

//Now I want to freeze the object so tat the value dosent change

// Object.freeze(user)
// user.name = "Flash"   // The name will not change
// console.log(user.name);


//Greeting in js

user.greeting = function(){
    console.log("Hello JS user");  // this will not console
}

console.log(user.greeting());  //This will console.log


user.greetingtwo = function(){
    console.log(`Hell Hero ${this.name} and ${this["full name"]}`);  // this will not console
}

console.log(user.greetingtwo());  //This will console.log