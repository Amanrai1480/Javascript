// classes comes after ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const res = new User("aman", "aman@gmail.com", "123")

console.log(res.encryptPassword());
console.log(res.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const result = new User("aman", "aman@gmail.com", "123")

console.log(result.encryptPassword());
console.log(result.changeUsername());