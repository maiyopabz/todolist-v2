const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.get("/", function(req, res ){

    var today = new Date();

    if (today.getDay() === 2 || today.getDay() === 0) {
        res.send("Yay its the weekend!");
    } else {
        res.send("BOO I HAVE WORK!");
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});