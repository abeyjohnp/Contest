const users= [
  {
    name:"Aman",
    posts: [
      { title:"JS", likes:50 },
      { title:"React", likes:10 }
    ]
  },
  {
    name:"Riya",
    posts: [
      { title:"Node", likes:80 }
    ]
  }
];

result = []
users.forEach( (user) => {
    for (let i=0 ; i<user.posts.length ; i++)
    {
        if (user.posts[i].likes > 40)
        {
            result.push(user.name)
        }
    }
})
console.log(result)