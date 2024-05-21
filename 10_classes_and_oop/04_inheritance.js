class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tech1 = new Teacher("aman", "aman@teacher.com", "123")

tech1.logMe()
const newUser = new User("new user")

newUser.logMe()

console.log(tech1 instanceof User);