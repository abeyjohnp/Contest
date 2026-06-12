// ----- Part A — Data Transformation (Harder)
// 1. Leaderboard with Ranks

    // const players = [
    //   { name: "Aman", score: 320 },
    //   { name: "Riya", score: 410 },
    //   { name: "Kabir", score: 410 },
    //   { name: "Arjun", score: 250 },
    //   { name: "Sneha", score: 320 }
    // ];

    // // [
    // //   { name: "Riya", score: 410, rank: 1 },
    // //   { name: "Kabir", score: 410, rank: 1 },
    // //   { name: "Aman", score: 320, rank: 3 },
    // //   { name: "Sneha", score: 320, rank: 3 },
    // //   { name: "Arjun", score: 250, rank: 5 }
    // // ]
    // let ranks = []
    // let max_score = 10000000
    // players.forEach((player) =>{    
    //     if (player.score <= max_score)
    //     {
    //         max_score = player.score
    //         ranks.push({name : player.name, score : player.score})
    //     }
    // })
    // console.log(ranks)

// 2. Invert a Grouping

    // const branchStudents = {
    //   CSE: ["Aman", "Riya"],
    //   ECE: ["Kabir"],
    //   ME: ["Arjun", "Sneha"]
    // };

    // newobj = {}

    // Object.entries(branchStudents).forEach((branchstudent) => {
    //     for (let i=0 ; i<branchstudent[1].length ; i++)
    //     {
    //         newobj[branchstudent[1][i]]=branchstudent[0]
    //     }
    // })
    // console.log(newobj)

// 3. Cart Total with Coupons

    // const cart = [
    //   { name: "Laptop", price: 80000, qty: 1, category: "electronics" },
    //   { name: "Mouse", price: 500, qty: 2, category: "electronics" },
    //   { name: "Shoes", price: 3000, qty: 1, category: "fashion" }
    // ];

    // const coupons = {
    //   electronics: 0.10,   // 10% off
    //   fashion: 0.20        // 20% off
    // };

    // let finalPayment = 0;
    // cart.forEach((item) => {
    //     let offer = 0
    //     if (item.category in coupons)
    //     {   
    //         offer = coupons[item.category]
    //     }
    //     let price = (item.price * (item.qty))
    //     let afterDiscount = price - (price*offer)
    //     finalPayment += afterDiscount
    // })

    // console.log(`Final Amount : ${finalPayment}`)

// 4. Find the Second Most Frequent
const orders = [
  "Laptop", "Mouse", "Laptop", "Keyboard",
  "Laptop", "Mouse", "Keyboard", "Mouse", "Monitor"
];

count = {}
orders.forEach((order) => {
    if (count[order])
    {
        count[order]+=1
    }
    else
    {
        count[order]=1
    }

})

sortedData = Object.values(count).sort()
console.log(sortedData)
