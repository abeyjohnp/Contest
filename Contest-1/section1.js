//1. Sum of element in array
const newarr = []
const array =  [[1,2,3,4], [5,6,7,8], [10,4,2,1], [1], [-10, 8]]
for (let i=0 ; i<array.length ; i++)
{
    let sum = 0;
    for (j=0 ; j<array[i].length ; j++)
    {   
        sum+= array[i][j]
    }
    if (sum < 0)
    {
        newarr.push(0)
    }
    else
    {
        newarr.push(sum)
    }    
}
console.log(newarr)

//2. Find the Second Largest Number

