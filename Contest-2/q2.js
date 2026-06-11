//2. Filter Expensive Products
const products= [
  { name:"Laptop", price:80000 },
  { name:"Mouse", price:500 },
  { name:"Monitor", price:15000 },
  { name:"Keyboard", price:1200 }
];
//Return only products costing more than ₹5000.

console.log(products.filter((products)=> {
    if (products.price > 5000)
    {
        return true
    }
}))