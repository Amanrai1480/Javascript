/*
The fetch() method starts the process of fetching a resource from a server.
The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.
The fetch() method returns a Promise that resolves to a Response object.
js Fetch API is a built-in module in Node. js that enables developers to make API requests and handle responses on the server.
fetch() is an ECMAScript6 (ES6) feature.

API is a set of rules or protocols taht let software applications communicate with each other to exchange the data features and functionality.
let promise=fetch(url,[options])
*/

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false//true
        if(!error){
          resolve({username:"aman",roll:12,age:22})
        }else{
          reject('error:something went wrong')
        }
      },2000)
})
async function asyncCall(){
  try {
   const result= await promiseFive
   console.log(result);
   console.log(result.username);
   console.log(result.roll);
  } catch (error) {
    console.log(error)
  }
}
asyncCall()



fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
console.log(error);
})

//in the two above codes the 2nd code execute first as it uses fetch() method
//js engine contains memory heaps and call stack, where call stack is the stacks of global execution context at bottom and then different functions, In those function some are special fun they make a call to web api, function like setTimeout, setInterval, fetch()
//when they call the setInterval(),setTimeout(), etc, they register the callback and store them in the task queue, when the time of execution come it again move to the top of the stack for execution
//when we call a fetch() then it create micro task queue of callbacks which is faster or priority queue then the task queue.so the callbacks of fetch first stores in the top of the stack.
//thats why fetch output come before other when they execute on same time.