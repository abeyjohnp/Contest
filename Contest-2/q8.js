const fs = require ("fs")

let contents = fs.readFile("a.txt","utf-8",(err,data) => {
    
    //data = data.trim()
    let newdata = data.split("\r\n")
    //console.log(newdata)
    obj = {}
    obj["lines"] = newdata.length
    let words = 0;
    let char=0;
    for (let i=0 ; i< newdata.length ; i++)
    {
        for (let j=0 ; j< newdata[i].length ; j++)
        {
            //if (newdata[i][j] != " "){
                char+=1
            
        }
        words += (newdata[i].split(" ")).length
        
    }
    obj["words"] = words
    //obj["characters"] = char
    obj["characters"] = data.length
    console.log(obj)
})
