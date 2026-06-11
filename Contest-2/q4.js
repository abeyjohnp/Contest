//4. Group Students By Branch
const students= [
  { name:"A", branch:"CSE" },
  { name:"B", branch:"ECE" },
  { name:"C", branch:"CSE" },
  { name:"D", branch:"ME" }
];

// {
// CSE: ["A","C"],
// ECE: ["B"],
// ME: ["D"]
// }
grouped={}
students.forEach((student)=>{
    if (grouped[student.branch])
    {        
        let arr = grouped[student.branch]
        arr.push(student.name)
        grouped[student.branch]=arr
    }
    else
    {
        let arr = []
        arr.push(student.name)
        grouped[student.branch] = arr
    }
})

console.log(grouped)