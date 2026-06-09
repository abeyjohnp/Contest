//1. Sum of element in array
console.log("1. Sum of element in array")
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
console.log(newarr + " is the sum of each array (q1)")

//2. Find the Second Largest Number
console.log("2. Find the Second Largest Number")
const newarr2 = [];
const array2 = [10, 25, 8, 99, 67];
for (let i=0 ; i<array2.length ; i++)
{
    for (let j=0 ; j<array2.length ; j++)
    {
        if (array2[j]<array2[i])
        {
            let temp = array2[j];
            array2[j] = array2[i];
            array2[i] = temp;
        }
    }
}
console.log(array2[1] + " : is the second largest number (q2) ")
