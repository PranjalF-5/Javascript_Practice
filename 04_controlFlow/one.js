if( 2 === "2")  //strict 
    {
        console.log("Batman");
    }

    



// ******************Falsy*************
// false, 0 , -0 , BigInt , 0n , "", null , undefined , NAN

//*****************truthy************** */
// "0", 'false', " ", [], {}, function(){},  


// false == 0
// true
// false === 0
// false
// false == ""
// true
// false === ""
// false
// 0 == ""
// true
// 0  ===""
// false


//Nullish Coalescing Operator ??

let a ;
a = 5 ?? 10
console.log(a);
a = null ?? 10
console.log(a);


//Ternary Operator

// condition ? true : false