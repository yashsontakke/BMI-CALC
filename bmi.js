const express = require("express")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/bmicalculator",function(req,res){
     var height = parseFloat(req.body.height);
     var weight = parseFloat(req.body.weight);
     res.send("your bmi is" + height/weight);
})
app.listen(3000,function (req,res) {
    console.log("server is started at port 3000");
})
