function one() {
    
   const hero = "Batman"

    function two()
   {
     console.log(hero)
     const superman = "Clarke"
   }
// console.log(superman)
//    two();

}

one()


//methods to declare fnctions
//console.log(add1(4));
function add1(nums)
{
    return nums + 1
}



const add = function(nums)
{
    return nums +2 ;
}
// console.log(add(7)); //no hoisting



//this keyword

const user = {
    name : "batman" ,
    age : 22 ,

    message : function()
    {
        console.log(`${this.name} , will save the world`);
        console.log(this);   //here the context is int he object {Batman}
    }

    
    
}

// user.message()
user.name = "superman"   //this keyword refers to the currrent context, here the context is changed
 //user.message()



 //console.log(this);  // here the context is empty object but in the brower the context is window



 function hero()
 {

    console.log(this);   //but the value of this inside a function gives a global object
 }

 //hero() 
 
 function hero1()
 {
    const username = "batman"
    console.log(this);   //this dosent wor with functions but only objects.Gives undefined this hols true for arrow functions as wwell
 }

//  hero1() 



 //Arrow functions

 const dc = (a,b) => {
    return a+b
 }

console.log( dc(3,4));