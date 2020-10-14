const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const line = require("@line/bot-sdk"); //追加

const config = {
  channelAccessToken: process.env.ACCESS_TOKEN,
  channelSecret: process.env.SECRET_KEY
};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/g/',(req,res) => res.json({method: "こんにちは、getさん"})) //追加
  .post('/p/',(req,res) => res.json({method: "こんにちは、postさん"}))　//追加
  .post("/hook/", (req,res) => lineBot(req,res))　//追加
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function lineBot(req,res){
    res.json({test: "hook"});
    console.log("pass");
  }