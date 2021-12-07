const express=require('express');
const path=require('path');
const app=express();


//$ Setting Template engine to 'ejs' 
app.set('view engine','ejs');

//$ Setting view directory path

app.set('views',path.join(__dirname,'/views'))

//$ Setting static files(css,js,imgs)
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public"+"/css"));
// app.use(express.static(path.join(__dirname, "/public", "/js")));
// app.use(express.static(path.join(__dirname, "/public", "/img")));


//$ Importing route files

const newsRouter=require('./routes/news');
app.use('/',newsRouter);





app.listen(8080,()=>{
    console.log('Listening to port 8080');
})
