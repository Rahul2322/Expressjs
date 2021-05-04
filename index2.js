const express=require("express");
const path=require("path");
const app=express();
const hbs=require('hbs');


app.set("view engine","hbs");

const partialPath=path.join(__dirname,'/views/partials');
console.log(partialPath)



hbs.registerPartials(partialPath)


app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/about/*',(req,res)=>{
    res.render("404",{
        error:"Sorry,the page couldn't be found"
    })
})

//this * means all other page except the ones defined above like home and about
app.get('*',(req,res)=>{
    res.render('404',{
        error:"Oops, the page doesn't exist"
    })
})
app.listen(8000)
