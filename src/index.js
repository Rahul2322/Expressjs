const express=require("express");
const app=express();

const path=require("path");
// console.log(__dirname)
// D:\NodeJs\ExpressJs\src
const staticPath=path.join(__dirname,"../public")
console.log(staticPath)


//built in middleware
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send("Hello from the express")
})
//"/ "and wwww.youtube.com means same that is home page"

app.listen(8000,()=>{
    console.log("Listening the port at 8000")
})

//Loading the whole static or responsive  website page