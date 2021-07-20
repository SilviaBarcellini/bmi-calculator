const express = require("express"); 
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express(); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
}); 

app.post("/", function (req, res){
    console.log(req.body);
    var h = parseFloat(req.body.h); 
    var w = parseFloat(req.body.w); 

    var bmi = w/(h*h);

    if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html")
        if (bmi <= 18.5) {
            res.send("<h3>Your BMI is: " + bmi +
            "<centre ><h1>You are Underweight!");
        } else if (bmi <= 24.5) {
            res.send("Your BMI is " + bmi + ". According to NHS you are normal");
        } else if (bmi <= 29.9) {
            res.send("Your BMI is " + bmi + ". According to NHS you are overweight");
        } else {
            res.send("Your BMI is " + bmi + ". According to NHS you are obese");
        }
    } else {
        res.sendFile(__dirname + "/failure.html")
    }
    
}); 

app.listen(3000, function(){
    console.log("Server is up and running on port 3000")
}); 

/* var bmi = w/(h*h);
if (response.statusCode === 200) {
    res.sendFile(__dirname + "/success.html")
    if (bmi <= 18.5) {
        res.send("<h3>Your BMI is around: " + bmi +
        "<centre ><h1>You are Underweight!");
    } else if (bmi <= 24.5) {
        res.send("Your BMI is " + bmi + ". According to NHS you are normal");
    } else if (bmi <= 29.9) {
        res.send("Your BMI is " + bmi + ". According to NHS you are overweight");
    } else {
        res.send("Your BMI is " + bmi + ". According to NHS you are obese");
    }
} else {
    res.sendFile(__dirname + "/failure.html")
} */