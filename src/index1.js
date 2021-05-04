// template engines that work with Express are Pug, Mustache, and EJS.
/*views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug'). */

const express=require("express");
const app=express();
const path=require("path");


//If i want to change the name of view directory then access it 
const templatePath=path.join(__dirname,"../template")


// to set the view engine

app.set('view engine','hbs');

//changed the name to templates and now setting it's path
app.set("views",templatePath)

//template engine route

app.get("/",(req,res)=>{
    res.render('index',{className:"Rahul"})
})

app.listen(8000)

// So basically what we are doing is changing the html content dynamically with the help of template engines