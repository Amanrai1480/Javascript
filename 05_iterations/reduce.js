// reduce method will return a value 
// const myNums=[1,2,3,4,5]
// const myTotal=myNums.reduce(function (accumulator,currentVlaue){
//     return accumulator+currentVlaue

// },0)
// console.log(myTotal);


// const myNums=[1,2,3,4,5]
// const myTotal=myNums.reduce( (accumulator,currentVlaue)=>accumulator+currentVlaue,0  
// )
// console.log(myTotal);

const initialValue=0
const myNums=[1,2,3,4,5]
const myTotal=myNums.reduce( (accumulator,currentVlaue)=>accumulator+currentVlaue,initialValue  
)
//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);




