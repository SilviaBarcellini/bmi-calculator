const express = require("express"); 
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
}); 

app.post("/", function (req, res){
    console.log(req.body)

    var h = parseFloat(req.body.h); 
    var w = parseFloat(req.body.w); 

    var bmi = w/(h*h); 
    res.send("Your BMI is " + bmi);
}); 

app.listen(3000, function(){
    console.log("Server is up and running on port 3000")
}); 