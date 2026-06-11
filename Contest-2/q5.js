//5. Flatten Orders
const users= [
  {
    name:"Aman",
    orders: ["Laptop","Mouse"]
  },
  {
    name:"Riya",
    orders: ["Keyboard"]
  }
];
result = []
users.forEach ((users)=>{
    result.push(users.orders)
})
console.log(result.flat())