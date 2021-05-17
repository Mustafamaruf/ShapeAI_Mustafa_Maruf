const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(requ, res)
{
    res.sendFile(__dirname+"/Index.html")
});

app.post("/", function(requ, res)
{
    var x;
    var n1= Number(requ.body.Num1);
    var n2= Number(requ.body.Num2);
    var opr =Object (requ.body.Ope);
    if(opr=="add")
    x=n1+n2;
    else if(opr=="sub")
    x=n1-n2;
    else if(opr=="multi")
    x=n1*n2;
    else if(opr=="div")
    x=n1/n2;
    res.send("The Answer is "+ x);
});

app.listen(3000, function(){
    console.log("Server has Successfully Started!")
});