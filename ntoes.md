# lexical
function Outer() {
  var name = "Mozilla"; 

  function inner() {
    console.log(name);
  }
  inner();
}
Outer();

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

so in lexical scoping the the inner class can access the variables and functions of the outer class but outer class cannot access the variables and the function of the inner class , if their are two inner class of a outer class then none of the inner class can acces the variables of the other inner class





