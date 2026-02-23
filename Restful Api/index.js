const express=require('express')
const app=express()
const path=require('path')
const {v4:uuidv4}=require('uuid')
const port=8080

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

let posts=[{
    id:uuidv4(),
    username:"ironman",
    quote:"i am ironman"},
{   
    id:uuidv4(),
    username:'thor',
    quote:'bring me thanos'
},
{
    id:uuidv4(),
    username:"groot",
    quote:'i am groot'
}
]

app.get('/posts',(req,res)=>{
    res.render('home.ejs',{posts})

})

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs')
})

app.post('/posts',(req,res)=>{
    let {username,quote}=req.body
    console.log(req.body)
    posts.push({username,quote,id:uuidv4()})
    console.log(posts)
    res.redirect('./posts')
})

//view route
app.get('/posts/:id',(req,res)=>{
    let {id}=req.params
    let post=posts.find(p=>p.id===id)
    console.log(post)
    res.render('view.ejs',{post})
})

//delete route
app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params
    let post=posts.find(p=>p.id===id)
    console.log('delete')
   posts = posts.filter(p => p.id !== id);
    res.send('deleted ')
})

app.listen(port,()=>{
    console.log(`listening to port : ${port}`)
})