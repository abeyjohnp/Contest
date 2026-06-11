//3. Find Duplicate Users
//Return all users whose email appears more than once.
const users= [
  { id:1, email:"a@test.com" },
  { id:2, email:"b@test.com" },
  { id:3, email:"a@test.com" },
  { id:4, email:"c@test.com" }
];
let countarray = {}
// for (let i=0 ; i<users.length ; i++)
// {
//     if (users[i].email in countarray)
//     {
//         countarray[users[i].email]+=1
//     }
//     else
//     {
//         countarray[users[i].email]=1
//     }
// }

// let newarray = users.filter((user) => {
//     return countarray[user.email] >=2
// })
// console.log(newarray);

//another approach below

users.forEach((users) => {
    if (countarray[users.email])
    {
        countarray[users.email]++
    }
    else
    {
        countarray[users.email]=1
    }
})

console.log(countarray)