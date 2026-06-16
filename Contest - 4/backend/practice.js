const express = require("express")

const app = express()

const port = 3000
const z = require("zod")
app.use(express.json());

const users = []

const userSignupSchema = z.object({
    email : z.email(),
    password: z.string().min(4).max(10)
})



app.post("/users", (req,res) => {
    const result = userSignupSchema.safeParse(req.body)
    //safe parse returns two things data and success.
    if (!result.success)
    {
        res.status(401).json({
            success : false,
            data : "invalid"
        })
    }
    
    res.json({
        sucess : true,
        data : "users login sucess"
    })
})

app.listen(port)