//singleton --> when object created form constructor
// object.create
//const obj =new Object()
const mySymbol=Symbol("mykey")
const obj={
    name:"aman",
    "full name":"aman rai",
    [mySymbol]:"mykey2",
    age:20,
    isLogin:true,
    work:["monday","tuesday"]
}
// console.log(obj.name);
// console.log(obj["name"]);//right way to access
// console.log(obj["full name"]);
// console.log(obj[mySymbol]);
// obj["age"]=22
// console.log(obj);
// Object.freeze(obj)  //after this changes will not reflect
// obj.age=23
// console.log(obj.age);

// obj.roll=31         //add new key
// console.log(obj);

// obj.greeting=function(){            //adding function
//     console.log(`hello this is ${this["full name"]}`);
// }
// console.log(obj.greeting());


// const user={
//     name:"aman",
//     email:"aman@123",
//     family:{
//         fName:"abc",
//         mName:"xyz",
//         relative:{
//             name:"abc"
//         }
//     }
// }
// console.log(user.family);
// console.log(user.family.relative.name);

// //*********object.assign()****************************** */

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 4, c: 5 };

// const returnedTarget = Object.assign(obj1, obj2);

// console.log(obj1);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === obj1);
// // Expected output: true

const ob1={1:"a",2:"b"}
const ob2={3:"a",4:"b"}
// const ob3=Object.assign({},ob1,ob2)
// console.log(ob3);
// console.log(ob1);
const objfinal={...ob1,...ob2}     //**   use this   **
console.log(objfinal);

// **************array of objects ********************************8

const userx=[{
    name:"aman",
    age:12
},
{
    name:"abhi",
    age:13
},
{
    name:"aashok",
    age:14
}
]
console.log(userx[2]);
console.log(userx[2].name);

// *************get keys of an object**************************

const userA={
    name:"aman",
    roll:12,
    age:19,
    email:"aman@!23"
}
console.log(Object.keys(userA));         //give key as an array
console.log(Object.values(userA)); 
console.log(Object.entries(userA)); 
console.log(userA.hasOwnProperty("roll"));    //it will check the key is present or not