const express=require('express');
let app=express();
const {createProxyMiddleware}=require('http-proxy-middleware');
const config=require('./config')
let proxyUser;

app.get("/",(req,res)=>{
    res.send("Hello user")
});


proxyUser=createProxyMiddleware({target:config.user_URL,pathRewrite:{'^/userdata':"/"}})
app.use('/userdata/',proxyUser);
module.exports=app;