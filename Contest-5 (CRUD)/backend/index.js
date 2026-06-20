const express = require("express")
const app = express()
const {z} = require("zod")
app.use(express.json())
let cntr = 0
const db = {
  users: [],
  movies: [
    {
      id:1,
      title:"Inception",
      genre:"Sci-Fi",
      duration:148,
      shows: [
        {
          showId:101,
          time:"10:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:102,
          time:"2:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:103,
          time:"6:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:2,
      title:"The Dark Knight",
      genre:"Action",
      duration:152,
      shows: [
        {
          showId:201,
          time:"11:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:202,
          time:"3:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:203,
          time:"7:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:3,
      title:"Interstellar",
      genre:"Sci-Fi",
      duration:169,
      shows: [
        {
          showId:301,
          time:"12:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:302,
          time:"5:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    }
  ]
}
const userNameSchema = z.object({
    username : z.string().max(10),
    password : z.string()
        .min(4)
        .max(10),
    email : z.email("Invalid syntax")
})
app.post("/signup",(req,res) => {
    const result = userNameSchema.safeParse(req.body)
    if (!result.success)
    {
        return res.status(400).json({
            success : false,
            message : "The password does not meet the requirements"
        })
    }
    const {username} = result.data
    const {password} = result.data
    const {email} = result.data
    res.status(201).json({
        success : true,
        message : "User has successfully logged in",
        userId : cntr
    })

    db.users.push(
        {
            id:cntr++,
            username:username,
            password:password,
            email:email,
            
        }
    )
    console.log(db.users)
})
app.post("/signin",(req,res) =>{
    let token = Math.random().toString()
    let username = req.body.username
    let password =  req.body.password
    
    let index = db.users.findIndex(user => 
        (user.username === username && user.password === password))
    db.users[index].token = token
    res.status(200).json({
        success : true,
        message : "Signin successful",
        token : token
    })
    console.log(db.users)

    
})
app.get("/movies",(req,res)=>{
    res.json({
        movies : db.movies
    })
})
app.get("/movies/:id",(req,res) => {
    let movieId = parseInt(req.params.id)
    let index = db.movies.findIndex(movie => (movie.id === movieId))
    res.status(200).json({
        movieData : db.movies.at(index)
    })
})
app.get("/movies/:id/shows",(req,res) => {
    let movieId = parseInt(req.params.id)
    let index = db.movies.findIndex(movie => (movie.id === movieId))
    res.status(200).json({
        movieData : db.movies.at(index).shows
    })
})
app.post("/bookings/:userId",(req,res) => {
    const movieId = req.body.movieId
    const showId = req.body.showId
    const seats = req.body.seats
    
    let movieIndex = db.movies.findIndex(m => m.id === movieId)
    if (!db.movies[movieIndex])
    {
        console.log(JSON.stringify(moviedata))
    }
    
})
app.listen(3000,()=>{
    console.log("Server is listening on http://localhost:3000")
})