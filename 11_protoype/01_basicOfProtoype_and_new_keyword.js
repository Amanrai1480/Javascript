//In JavaScript, the term "prototype" refers to a mechanism through which objects can inherit properties and methods from other objects.
//Prototype Property:
//Every JavaScript function has a prototype property, which is an object. This property is only present in functions (since functions are used as constructors for creating objects). When a function is used to create a new object (via the new keyword), the newly created object inherits properties from the function's prototype object.
//in js everything is an object and one inherits the properties of other, so we can say array, string function are object and they have all the properties which is exhibit by the object, function exhibits the preoperties of function but we can make them it behave like a object


function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}
//creating our own properties of a fun createUser
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
//with the help of new keyword the new created properties added with the fun(constructor)
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/