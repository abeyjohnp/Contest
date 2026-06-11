//6. Most Purchased Product
const orders= [
"Laptop",
"Mouse",
"Laptop",
"Keyboard",
"Laptop",
"Mouse"
];

ordercount = {}

orders.forEach((order)=>{
    if (ordercount[order])
    {
        ordercount[order]+=1
    }
    else
    {
        ordercount[order]=1
    }
})

let max=0
let name = ""
orders.forEach((order)=>{
    //console.log(ordercount[order])
    if (ordercount[order] > max)
    {
        max = ordercount[order]
        name = order
    }
})
console.log({product : name, count : max})
