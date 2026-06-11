const students= [
  { name:"Aman", marks:78 },
  { name:"Riya", marks:91 },
  { name:"Kabir", marks:65 }
];

let ansArray = students.map((students) => {
  let grade;
  if (students.marks > 90)
  {
    grade = 'A'
  }
  else if (students.marks >= 70)
  {
    grade = 'B'
  }
  else
  {
    grade = 'C'
  }
  return{
    name : students.name,
    grade : grade
  }
})
console.log(ansArray)
