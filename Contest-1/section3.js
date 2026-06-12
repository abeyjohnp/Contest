const fs = require("fs")
//1. User Email Extractor

    // let emails = []
    // fs.readFile("users.json","utf-8", function(err,data){
    //     let newobj = JSON.parse(data);
    //     //console.log(newobj)

    //     for (let i =0 ; i < newobj.length ; i++)
    //     {
    //         emails.push(newobj[i].email)
    //     }
    //     console.log(emails)
    //     emails=emails.join('\n')
    //     fs.writeFile("emails.txt",emails,function(err,data){

    //         })
    //     }
    // )

//2. Student Marks Report Generator

    // let marks = []
    // fs.readFile("marks.json","utf-8",function(err,data){
    //     let newobj = JSON.parse(data);
    //     for (let i =0 ; i < newobj.length ; i++)
    //     {
    //         marks.push(parseInt(newobj[i].marks))
    //     }
    //     for (let i=0 ; i<marks.length ; i++)
    //     {
    //         for (let j=0 ; j<marks.length ; j++)
    //         {
    //             if (marks[j]<marks[i])
    //             {
    //                 let temp = marks[j];
    //                 marks[j] = marks[i];
    //                 marks[i] = temp;
    //             }
    //         }
    //     }
    //     console.log(marks)
    //     record = "Highest : "+marks[1]+"\nAverage : "+((marks[0]+marks[1]+marks[2])/3)+"\nLowest : "+marks[2];
    //     fs.writeFile("report.txt",record,function(err,data){

    //     })
    // })


//3. Notification Service Simulator

    // fs.readFile("events.txt","utf-8",function(err,data){
    //     //console.log(data)
    //     let newdata= data.split('\r\n');
    //     //console.log(newdata)
    //     let uctr=0
    //     let op = 0
    //     let pr =0
    //     for (let i=0; i< newdata.length ; i++)
    //     {
    //        if (newdata[i]=="USER_SIGNUP")
    //        {
    //             uctr++
    //        }
    //        else if (newdata[i]=="ORDER_PLACED")
    //        {
    //             op++
    //        }
    //        else
    //        {
    //             pr++
    //        }
    //     }
    //     string = "USER_SIGNUP : "+uctr+"\nORDER_PLACED : "+op+"\nPASSWORD_RESET : "+pr
    //     fs.writeFile("analytics.txt",string,function(err,data){

    //     })
    // })

//4. Sequential File Processor


    // fs.readFile("message.txt","utf-8",function(err,data){
    //     upper = data.toUpperCase()
    //     //console.log(upper)
    //     fs.writeFile("uppercase.txt",upper,function(err,data){
    //         fs.readFile("uppercase.txt","utf-8",function(err,data){            
    //             let words = "Total Words : " + data.split(" ").length

    //             fs.writeFile("summary.txt",words,function(err,data){
    //                 console.log(err);
    //             })
    //         })
    //     })    
    // })

//Q5. User Report Generator

    //output :
    // Ram - 85
    // Shyam - 72
    // Geeta - 91


    // fs.readFile("students.json","utf-8",(err,data) =>{
    //     objs1 = JSON.parse(data)
    //     fs.readFile("marks2.json","utf-8",(err,data)=>{
    //         objs2= JSON.parse(data)
    //         txt = ""
    //         for (let i=0 ; i<objs2.length ; i++)
    //         {
    //             if ((objs2[i].id) === (objs1[i].id))
    //             {
    //                 txt += [objs1[i].name]+" - "+objs2[i].marks+"\n"
                    
    //             }
    //         }
    //         fs.writeFile("report.txt",txt,()=>{})
    //     })
    // })