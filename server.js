// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/checkIP",function(req,res){
  var ip = req.ip;
  var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/; //http://www.regular-expressions.info/examples.html

//var a = "http://www.example.com/landing.aspx?referrer=10.11.12.13";

var t = ip.match(r);
//console.log(t[0]);
 // console.log(ip);
  var userAgent =req.headers["user-agent"];
  var lang =req.headers["accept-language"];
  res.json({"ipaddress":t[0],"language":lang,"software":userAgent});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
