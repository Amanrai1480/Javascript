// const username={
//     name:"aman",
//     age:21,
//     message:function(){
//         console.log(`${this.name} ,welcome `)
//         console.log(this);
//     }
// }

// console.log(username.message());
// console.log(this);       // here this refer to empty object but on browser it refer to window...


// function tryfun(){
//     const age=15
//     console.log(this.age);      //undefined as we cannot we can't access this in fun , we can in object
// }
// tryfun()

// **********arrow****************88
const tryfun=()=>{
    const age=15
    console.log(this);      //return empty object
}
tryfun()


// const addTwoNum=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwoNum(4,4));
                    //or explicit return
 const addTwoNum=(num1,num2)=>( num1+num2) 

 console.log(addTwoNum(4,4));
