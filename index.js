const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const mongoose= require("mongoose")
const Content = require("./schema")

// const port=process.env.PORT||5000;
app.use(bodyParser.urlencoded({
    extended:true

}))
app.use(bodyParser.json())
app.use(cors())


mongoose.connect("mongodb+srv://yasasvipreetam:yasasvipreetam@cluster0.fvjeuvz.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(()=>{
    console.log("mongodb connected")
    })
    .catch((err)=>{
    console.log(err)

    })

app.get("/",(req,res)=>{
    res.send("hi good mrng")
})
app.get("/users",async(req,res)=>{
    await Content.find()
        .then(found=>res.json(found))
})


app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData=new Content({
        username,password
    })
    newData.save()
})
app.listen(5000,()=>console.log("server started successfully"))