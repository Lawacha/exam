const express=require('express')
const app=express()
let port=8080

app.get("/multiply",(req,res)=>{
    let {a,b}=req.query
    let multiply=a*b
    res.send(`result is ${multiply}`)
})

app.get("/search",(req,res)=>{
    let {q}=req.query
    res.send(`name is ${q}`)
})



app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})