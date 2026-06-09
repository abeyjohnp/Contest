// 15 Problem (Arrays + Object)
//      1. Sum all transactions per user

// let details=[
//     { user: "A", amount: 100 },
//     { user: "B", amount: 200 },
//     { user: "A", amount: 50 }
// ]
// let amtdetails={};
// for (let i = 0 ;i <details.length ; i++)
// {
//     amtdetails[details[i].user]=details[i].amount
    
// }
// console.log(amtdetails)

//      2. Transform API response to object (id → name)
let details =[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]
let newdetails = [

]

for (let i=0 ; i<details.length; i++)
{
    
    newdetails[details[i].id] = details[i].name
}
console.log(newdetails)