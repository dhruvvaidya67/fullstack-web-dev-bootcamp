import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("What!");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><p>My name is Dhruv</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Conatact Me</h1><p>My Phone no is 999999999</p>");
});

app.listen(port,() => {
    console.log(`Server is running on ${port}`);
})