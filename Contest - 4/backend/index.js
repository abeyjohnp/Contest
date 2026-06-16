const express = require("express");
const {z} = require("zod");
const app = express ();

app.use(express.json())
const cors = require('cors');
app.use(cors()); 

const todos = []
let counter =1 
const todoCreateSchema = z.object({
    task : z.string().max(30)
})

app.get("/todos/:id",(req,res) => {
    let index= (req.params.id)-1
    res.json({
        sucess : true,
        data : todos[index]
    })
})

app.get("/todos",(req,res) => {
    res.json({
        sucess : true,
        data : todos
    })
})





app.post("/todos",(req,res) => {
    const result = todoCreateSchema.safeParse(req.body)
    //data, success
    if(!result.success){
        return res.status(400).json({
            success : false,
            data : [],
            error : "Invalid Inputs"
        })
    }
    const {task} = result.data
    let pushObj = {
        id : counter++,
        task,
        isComplete : false
    }
    todos.push(pushObj)
    res.status(201).json({
        sucess : true,
        data : pushObj,
        message : "CREATED SUCCESSFULLY!"
    })
})

app.put("/todos/:id",(req,res) => {
    const todoid = parseInt(req.params.id)
    let todo = todos.find(t=> t.id === todoid)
    
    todo.isComplete = true
    res.status(200).json({
        success :true,
        data : todo,
        message : 'todo updated successfully!',
        
    })

})


app.delete("/todos/:id",(req,res) =>{
    let todoid = parseInt(req.params.id)
    let index = todos.findIndex(t => t.id === todoid)
    
    // res.json({
    //     "Deleted ":index
    // })
    let deletedcontent = todos.splice(index,1)[0]
    res.status(200).json({
        data : todos,
        deleted : deletedcontent
    })
})

app.listen(3005 ,() =>
{
    console.log("listening!")
})