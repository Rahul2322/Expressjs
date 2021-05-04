//routing
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello From Home Side")
})

app.get("/About",(req,res)=>{
    res.send({
        id:1,
        name:"rahul"
    })
})
app.get("/Aboutus",(req,res)=>{
    res.json({
        id:2,
        name:"rahul"
    })
})
app.get("/Contactus",(req,res)=>{
    res.send("<h1>Hello From contact Side</h1>")
})

app.listen(8000)

//json and send methods are identical when object or array is passed,but res.json() will also convert non-objects,
//such as null and undefined,which are not valid json