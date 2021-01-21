
const express = require('express');
const server = express();

server.use(logger)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});



//custom middleware

function logger(req, res, next) {
  console.log(`user-agent: ${req.method}, url: ${req.url}, time: ${new Date().getTime()}`)
  next();
}

function validateUserID (req, res, next){
    const url = req.url 

  next();
}

module.exports = server;