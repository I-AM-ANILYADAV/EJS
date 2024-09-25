const express = require("express");
const app  = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views" ,path.join(__dirname, "/views"));

app.get("/", (req ,res)=>{
    res.render("home.ejs");
})


app.get("/ig/:username", (req,res) =>{
    const follower = ["Anil" , "Rohit" , "Jatin"];
    let {username} = req.params;
    res.render("Instagram.ejs",{username , follower});

   

})

app.get("/hello", (req ,res)=>{
    res.send("Hello");
})

app.get("/rolldice", (req ,res)=>{
    let diceval = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs", { diceval});
})

app.listen(port , () =>{
    console.log(`Listening on port${port}`);
})