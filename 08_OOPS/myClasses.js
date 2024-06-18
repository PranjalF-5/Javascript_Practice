
//**********************classes ********************/
class User {
    constructor(username , email , password)
    {
        this.username = username 
        this.email = email 
        this.password = password
    }
        eccryptPassword()
    {
        return `${this.password}abc`
    }
}

const user1 = new User('Batman', 'Bruce@123', 'Gotham')
// console.log(user1);
//console.log(user1.eccryptPassword());


//**************************Without Classes************/

function newUser(username,email,password)
{
    this.username = username
    this.email = email
    this.password = password
}

newUser.prototype.eccryptPassword = function(){
    return `${this.password}abc`
}

const user2 = new newUser('Superman','Clarke@123','Steel')
console.log(user2.eccryptPassword());



