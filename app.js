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
    module.exports = bmi;
     
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html")
            if (bmi <= 18.5) {
                res.send("<h1>Your BMI is " + bmi + "</h1><h3>According to the NHS you are underweight</h3><p>'The person who dreamed up the BMI said explicitly that it could not and should not be used to indicate the level of fatness in an individual. The BMI was introduced in the early 19th century by a Belgian named Lambert Adolphe Jacques Quetelet. He was a mathematician, not a physician. He produced the formula to give a quick and easy way to measure the degree of obesity of the general population to assist the government in allocating resources. In other words, it is a 200-year-old hack.'</p>");
            } else if (bmi <= 24.5) {
                res.send("<h1>Your BMI is" + bmi + "</h1><h3>According to NHS you are normal</h3>");
            } else if (bmi <= 29.9) {
                res.send("<h1>Your BMI is" + bmi + "</h1><h3>According to NHS you are overweight</h3><p>'there are distinct categories of underweight, ideal, overweight and obese, with sharp boundaries that hinge on a decimal place. That's total nonsense.'</p>");
            } else {
                res.send(("<h1>Your BMI Factorator Says:" + bmi + "</h1><h3>According to NHS you are obese</h3><p>'BMI is scientifically nonsensical. There is no physiological reason to square a person's height (Quetelet had to square the height to get a formula that matched the overall data. If you can't fix the data, rig the formula!). Moreover, it ignores waist size, \n which is a clear indicator of obesity level.' </p>"));
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