// ***********object literals**********************8
// const obj={
//     username:"Aman",
//     age:22,
//     roll:31,
//     getUserDetails:function(){
//         console.log("take the details from the user");
//         console.log(`Age of user:${this.age}`);
//         console.log(this);//this will give the value of current context
//     }
// }
// console.log(obj.username);
// console.log(obj.getUserDetails());


// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     // this.greeting = function(){
//     //     console.log(`Welcome ${this.username}`);

//     // }

//     return this
// }

// const userOne =  User("aman", 12, true)
// const userTwo = new User("rai", 11, false)
// console.log(userOne);
//console.log(userTwo);
//their is a prblm in the above code as as userTwo rewrite the userOne because they both share same memory address to solve this prblm we use new keyword

// ******************construction********************


function User(username,age,roll){
    this.username=username;
    this.age=age;
    this.roll=roll;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
}
//new keyword will allocate diff. memory to diff user
//during creation of an object a constructor is called
const userOne=new User("aman",22,31)
console.log(userOne);
const userTwo=new User("Abhi",20,12)
console.log(userOne);

console.log(userOne.constructor);//give reference of himself


//instanceof
//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true


 // The constructor method is a special method of a class for creating and initializing an object instance of that class.
//constructor() { /* … */ }
// constructor(argument0) { /* … */ }
// constructor(argument0, argument1) { /* … */ }
// constructor(argument0, argument1, /* …, */ argumentN) {  }
class Polygon {
    constructor() {
      this.name = 'Polygon';
    }
  }
  
  const poly1 = new Polygon();
  
  console.log(poly1.name);
  // Expected output: "Polygon"
  