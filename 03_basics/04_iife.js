//Immediately Invoked Function Expression(IIFE)
// IIFE is used to prevent the poplution by global scope variable

// named iife
(function(){
console.log("function is called");

//simple iife
})();  //if we want to write two iife then ; is must
(()=>{
    console.log("function 2 is called");
})();
((name)=>{
    console.log(`hello ${name}`);
})("aman");
