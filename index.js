const express=require('express')
const path=require('path')
const app=express()
let port=8080

app.set("view engine",'ejs')
app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    res.render('home.ejs')
})

app.get("/rolldice",(req,res)=>{
    let dice=Math.floor(Math.random()*6)+1
    res.render('home.ejs',{dice})
})

app.get("/ig/:username",(req,res)=>{
    let instaData=require("./data.js")
    let {username}=req.params
    let data=instaData[username]
    res.render('instagram.ejs',{data})
})

app.listen(port,()=>{
    console.log(`listening to port: ${port}`)
})