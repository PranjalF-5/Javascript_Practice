function a ( val1, val2 ,...vals)
{
    return vals
}

//val1 will take 200
//val2 will take 300
//vals will take ans array and in that it will take 400,500

console.log(a (200,300,400,500));


const user = {
    name : " batman",
    home : "gotham"
}

function handleObject(object)
{
    console.log(`name is ${object.name} and home is ${object.home}`);
}

handleObject(user)