// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }//now this "this" refering to the setUsername context not the createUser

// function createUser(username, email, password){
//     SetUsername( username)
//     this.email = email
//     this.password = password
// }

// const result = new createUser("aman", "aman@fb.com", "123")
// console.log(result);

//to solve the above issue we pass the current this
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const result = new createUser("aman", "aman@fb.com", "123")
console.log(result);