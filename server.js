var http=require("http"),
    url=require("url"),
    mime=require("mime"),
    path=require("path"),
    bodyParser=require("body-parser"),
    fs=require("fs");
var express=require("express");
var app=express();
app.use(bodyParser.json());//解析json格式的请求体
//-->静态服务中间件 以当前服务根目录作为静态服务的根目录
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.sendFile("./index.html",{root:__dirname});
});
app.listen(8080,()=>{
    console.log("victory 8080");
});