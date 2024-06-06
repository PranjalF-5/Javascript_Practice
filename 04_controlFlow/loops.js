// ************for In loop *******************

const myObject = {
    js : "javascript",
    react : "library",
    swift : "apple"
}

for ( const item in myObject)
    {
        //console.log(item,myObject[item]);
    }



const myArray = ["js", "react", "tailwind"]

for( const key in myArray)
    {
        //console.log(key , myArray[key]);
    }


const myMap = new Map()

myMap.set('js', 'javascript')
myMap.set('reatc', 'library')
myMap.set('tailwijd', 'css')

for(const key in myMap)
    {
      //  console.log(key);  // not iterable so its not printing
    }


// ************for each loop *******************

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){  
    //console.log(val);
} )

coding.forEach((item) => {
   // console.log(item)
})


coding.forEach( (item, index, arr)=> {
    //console.log(item, index, arr);    // prints the values, index, and the complete array
} )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((key) => {
    console.log(key);
})