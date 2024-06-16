//js is prototype based language unlike c and c++ which are classes based language

//Object -> collection of properties and methods

//partss of oop

// object liteals
//Conctructor Functions
//Prototypes
//Classes
//Instances (new, this)


//4pillars

//Abstraction
//Encapsulation
//Inheritance
//Polymorphism 


function User(name , age , isLoggedIn)
{
    this.name = name ,
    this.age = age ,
    this.isLoggedIn = isLoggedIn

   // return this    no need to write this as it implecitely returns
}


const user1 = new User('Batman', 12, true);

const user2 = new User('Superman', 12, false);
console.log(user2);
console.log(user1);          //Here if we dont use the new kwyword then a new instance of the User is not created and it overwrites the values 

//If we use new kwyword then new instances are created, new is the constructor function

// When we use new Keyword, an empty object is created which is called instance. After that a constructor function gets called due to new keyword which injects the arguements in the instance 