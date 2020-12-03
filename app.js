const express = require('express');
const app =express();

app.get('/', (req,res)=>{
    res.send("Welcome");
});

app.get('/about', (req,res)=>{
    res.send("about");
});

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log("Hello!!")
});

