const express = require('express');

const app=express();

app.use(express.static("public"));

app.get("/",function (request,response){
  response.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 3000,function (){
  console.log("Server is running on Port 3000...");
});
