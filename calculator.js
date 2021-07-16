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

    if (bmi <= 18.5) {
        res.send("Your BMI is " + bmi + ". According to NHS you are underweight");
    } else if (bmi <= 24.5) {
        res.send("Your BMI is " + bmi + ". According to NHS you are normal");
    } else if (bmi <= 29.9) {
        res.send("Your BMI is " + bmi + ". According to NHS you are overweight");
    } else {
        res.send("Your BMI is " + bmi + ". According to NHS you are obese");
    }
    
}); 

app.listen(3000, function(){
    console.log("Server is up and running on port 3000")
}); 