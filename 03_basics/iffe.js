(function()
{
    console.log("Superman");
}) () ; // important colon

//The parenthesis immediately invokes the function but first the fnctions meeds to be wrapped inside the function

//sometimes the global scope pollutes the environment and to eleminate the pollution form global variables we immediately invoke the function.

//it basicaly protects the functions from global pollution

//After invoking the function always use a colon