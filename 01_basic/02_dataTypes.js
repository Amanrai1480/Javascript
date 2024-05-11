"use strict" //treat all js code as newer version
//alert(3+3) it will give error as it is nodejs not browser
//for documentation go for "mdn" and tc39

let age=22
let name="aman"
let isValid=true

console.log(typeof age);  //number
console.log(typeof "aman") //string
console.log(typeof null);  //*object*
console.log(typeof undefined);  //undefined
          
//how the data stored in the memory and access on this basis the datatypes divided into two typs
          //primitive data types:
          
//number => 2 to power 53
//Bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined => value not assigned yet
//symbol => uniqueness

          //non-primitive(references)
  //references directly allocated in the memory 
  //Array, objects, functions  
    
  const heroes=["aman","abhi","ram"]

  let obj={
    name:"aman",
    roll:31,
  }

  let myfun=function(){
    console.log("hello World");
  }

  // ***************memory**********************************
   //stack(primitive)
   //all primitive data goes in the stack and their copy will be shared among the variables
   //eg
   let myName="aman"
   let anotherName=myName
   anotherName="abhi"
   console.log(myName);   //aman
   console.log(anotherName);//abhi

   //heap(non-primitive)
   //in non-primitive, data stored in heap and their references is shared among variables

   let userOne={
    email:"aman@123.com",
    upi:"aman@ybl",
   }
   let userTwo=userOne
   userTwo.email="abhi@123"
   console.log(userOne.email);
   console.log(userTwo.email);