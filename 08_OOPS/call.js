function setUsername(username)
{
    this.username = username 
}

function createUser(username , email, password)
{
    setUsername.call(this,username); // call holds the reference of the above context and this associates the setUsername with current context

    this.email = email
    this.password = password

}

const user1 = new createUser("Batman", "Bruce" , "Gotham")  //here we are calling a function insode another function but when consoling it the username is not showing because the call is not made just the reference is given
console.log(user1);