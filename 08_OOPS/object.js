function multiply ( num )
{
    return num * 2 ;
}

multiply.power = 2 ;

// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);


//function is a function but it can also be an object because injavascript everything is an object. This is supported by the prototypal behaviour of the js444


function createUser(username, score)
{
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function ()
{
    this.score++ ;        //this gives the current context
}

const cost1 = new createUser('ps4' , 30000)   //here if we dont use ne keyword then it means that the object increment has been injected in protootype but cost1 dosent know it yet, to make it aware of the new injected property we use "new" keyword
const cost2 = createUser('ps5', 40000) ;  //here we are not using the new keyword so it will still throw undefined

console.log(cost1);
console.log(cost2);