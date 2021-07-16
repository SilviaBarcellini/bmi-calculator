const express = require("express"); 
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
}); 

app.post("/", function (req, res){
    console.log(req.body)
    res.send("thanks for posting!");
}); 

app.listen(3000, function(){
    console.log("Server is up and running on port 3000")
}); 