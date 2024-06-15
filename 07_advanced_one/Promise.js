const promiseOne = new Promise( (resolve,reject) => {
 setTimeout( ()=> {
   // console.log("Async function");
    resolve();
 },2000)
 
})

promiseOne.then(()=>{
   // console.log('Async task is completed');
})



const promiseTwo = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username: "batman", name : "Bruce Wayne"})
    },2000)
})

promiseTwo.then( (user)=> {   //all the things in resolve are being ccessed by then.
 //
 //console.log(user);
})



const promiseThree = new Promise( (resolve,reject) => {
  
    setTimeout(()=> {
        let error = false ;
         
        if( !error)
            {
                resolve({ name:"clarke", hero : "Superman"})
            }else{
                reject('Error, sometging went wrong')
            }
    },1000)
   

})

promiseThree.then( (user)=>{
   // console.log(user);
    return user.name
})
.then((name)=>{      //this is called chaining. We cannot store the vlaue of then in a variable and then simple get the value of name. to access name we need to properly chain it which ultimatelty leads to callback hell
   // console.log(name);
})
.catch((error)=>{
   // console.log(error)
})



//**********************async await***************** */

const promiseFour = new Promise( (resolve,reject) => {
  
    setTimeout(()=> {
        let error = true ;
         
        if( !error)
            {
                resolve({ name:"clarke", hero : "Superman"})
            }else{
                reject('Error, sometging went wrong')
            }
    },1000)
   

})

async function asyncPromiseFour (){
    try {

        const response = await promiseFour
        console.log(response);

    }catch (error){
        console.log(error);
    }
}

asyncPromiseFour()


//jab url se data fetch karte h to usko v aasync await  me try catch me use karte hai. aur jo data aata h uska datatype different hota h to usko v change karte hai JSON me aur isme  v await karna padta hai as it also takes a lot of time
