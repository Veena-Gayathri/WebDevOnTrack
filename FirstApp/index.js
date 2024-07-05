const express = require("express");
const app= express();


// app.use((req, res)=>{
//     console.log("We got a new request");
//     res.send('<h1> this is my webpage!</h1> ')
// })

app.listen(3000, ()=>{
    console.log("listening on port 3000!");
});

app.get('/cats',(req,res)=> {
    res.send('MEOW!!');
} )

app.get('/',(req,res)=>{
    res.send("home page");
})

app.post('/cats',(req,res)=>{
    res.send("cat post request");
})