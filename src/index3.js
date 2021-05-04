//using query string 

const express=require('express');
const app=express();
const requests=require('requests')

app.get('/about',(req,res)=>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=360b09fc988c05f8026ff181763a5187`)
        .on('data', function (chunk) {
            const objData=JSON.parse(chunk);
            const arrData=[objData];
            console.log(`city name is ${arrData[0].name} and temp is `);
            res.write(arrData[0].name)
        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
           
            res.end();
          });
});

app.listen(3000)
//http://localhost:3000/about?name=pune passing diff names of city